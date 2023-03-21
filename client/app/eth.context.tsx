"use client";

import { createContext, useContext, useState } from "react";

export enum NotReadyReason {
  Initializing
}

export const EthContext = createContext<{
  ready: boolean;
  notReadyReason: NotReadyReason;
}>({ ready: false, notReadyReason: NotReadyReason.Initializing });

export const useEth = () => useContext(EthContext);

interface EthProviderProps {
  children: React.ReactNode;
}

export function EthProvider({ children }: EthProviderProps): JSX.Element {
  const [ready, setReady] = useState(false);
  const [notReadyReason, setNotReadyReason] = useState(
    NotReadyReason.Initializing
  );

  return (
    <EthContext.Provider value={{ ready, notReadyReason }}>
      {children}
    </EthContext.Provider>
  );
}
