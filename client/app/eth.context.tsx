"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect
} from "react";
import Web3 from "web3";
import type { Contract } from "web3-eth-contract";

export enum NotReadyReason {
  Initializing,
  NoWallet,
  NoArtifact,
  NoAccount,
  WrongNetwork
}

export interface ContextValueNotReady {
  ready: false;
  notReadyReason: NotReadyReason;
}

export interface ContextValueReady {
  ready: true;
  web3: Web3;
  account: string;
  contracts: Record<"simpleStorage", Contract<any>>;
}

type ContextValue = ContextValueNotReady | ContextValueReady;

export const EthContext = createContext<ContextValue>({
  ready: false,
  notReadyReason: NotReadyReason.Initializing
});

export const useEth = () => useContext(EthContext);

interface EthProviderProps {
  children: React.ReactNode;
}

export function EthProvider({ children }: EthProviderProps): JSX.Element {
  const [ready, setReady] = useState(false);
  const [notReadyReason, setNotReadyReason] = useState(
    NotReadyReason.Initializing
  );
  const [web3, setWeb3] = useState<Web3>();
  const [account, setAccount] = useState<string>();
  const [simpleStorage, setSimpleStorage] = useState<Contract<any>>();

  const init = useCallback(async () => {
    setReady(false);
    if (!window.ethereum) return setNotReadyReason(NotReadyReason.NoWallet);
    const simpleStorageArtifactResponse = await fetch(
      "/api/simple-storage-artifact"
    );
    if (!simpleStorageArtifactResponse.ok)
      return setNotReadyReason(NotReadyReason.NoArtifact);

    const web3 = new Web3(window.ethereum);
    setWeb3(web3);

    let account;
    try {
      [account] = await web3.eth.requestAccounts();
    } catch {
      return setNotReadyReason(NotReadyReason.NoAccount);
    }
    setAccount(account);

    const networkId = (await web3.eth.net.getId()).toString();
    const simpleStorageArtifact = await simpleStorageArtifactResponse.json();
    const simpleStorageAddress =
      simpleStorageArtifact.networks[networkId]?.address;
    if (!simpleStorageAddress)
      return setNotReadyReason(NotReadyReason.WrongNetwork);

    const simpleStorage = new web3.eth.Contract(
      simpleStorageArtifact.abi,
      simpleStorageAddress
    ) as unknown as Contract<any>;
    setSimpleStorage(simpleStorage);

    setReady(true);
  }, []);

  useEffect(() => void init(), [init]);

  useEffect(() => {
    const events = ["chainChanged", "accountsChanged"];
    events.forEach(e => window.ethereum.on(e, init));
    return () => events.forEach(e => window.ethereum.removeListener(e, init));
  }, [init]);

  const value = ready
    ? ({
        ready,
        web3: web3 as Web3,
        account: account as string,
        contracts: { simpleStorage: simpleStorage as Contract<any> }
      } satisfies ContextValueReady)
    : ({
        ready,
        notReadyReason
      } satisfies ContextValueNotReady);

  return <EthContext.Provider value={value}>{children}</EthContext.Provider>;
}
