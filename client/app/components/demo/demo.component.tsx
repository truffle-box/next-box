"use client";

import { useState } from "react";
import { useEth, NotReadyReason } from "@/eth.context";
import { Contract } from "./contract.component";
import { ContractControls } from "./contract-controls.component";
import styles from "./demo.module.css";

export function Demo(): JSX.Element {
  const [value, setValue] = useState("?");

  const eth = useEth();
  if (!eth.ready) {
    switch (eth.notReadyReason) {
      case NotReadyReason.Initializing:
        return <p>Initializing...</p>;
      case NotReadyReason.NoWallet:
        return <p>⚠️ Cannot find wallet.</p>;
      case NotReadyReason.NoArtifact:
        return (
          <p>
            ⚠️ Cannot find <span className="code">SimpleStorage</span> contract
            artifact. Please complete the above preparation first.
          </p>
        );
      case NotReadyReason.NoAccount:
        return <p>⚠️ Wallet not connected.</p>;
      case NotReadyReason.WrongNetwork:
        return (
          <p>
            ⚠️ MetaMask is not connected to the same network as the one you
            deployed to.
          </p>
        );
    }
  }

  return (
    <section>
      <h2>See it in action</h2>

      <div className={styles["contract-container"]}>
        <Contract value={value} />
        <ContractControls setValue={setValue} />
      </div>

      <p>
        Try changing&nbsp;
        <span className="code">value</span>
        &nbsp;in&nbsp;
        <span className="code">SimpleStorage</span>.
      </p>

      <p>
        Take a look at&nbsp;
        <span className="code">client/app/eth.context.tsx</span>. This context
        maintains a global state and provides things like&nbsp;
        <span className="code">Web3</span>&nbsp;
        <span className="code">Contract</span> objects and a&nbsp;
        <span className="code">Web3</span> instance to the rest of the app.
      </p>

      <p>
        Feel free to remove anything you don't need, and extend&nbsp;
        <span className="code">EthContext</span> to your dapp's needs.
      </p>

      <p>Happy hacking!</p>
    </section>
  );
}
