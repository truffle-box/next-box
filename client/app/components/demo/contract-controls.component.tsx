import { useState } from "react";
import type React from "react";
import { useEth } from "@/eth.context";
import type { ContextValueReady } from "@/eth.context";
import styles from "./contract-controls.module.css";

interface ContractControlsProps {
  setValue: React.Dispatch<React.SetStateAction<string>>;
}

export function ContractControls({
  setValue
}: ContractControlsProps): JSX.Element {
  const {
    account,
    contracts: { simpleStorage }
  } = useEth() as ContextValueReady;
  const [input, setInput] = useState("");

  const read = async () => {
    const value = await simpleStorage.methods.read().call();
    setValue(value.toString());
  };

  const write: React.MouseEventHandler<HTMLElement> = async e => {
    if ((e.target as HTMLElement).tagName === "INPUT") return;
    if (!input) return alert("Please enter a value to write.");

    const writeMethod = simpleStorage.methods.write(input);
    await writeMethod.send({
      from: account,
      gas: (await writeMethod.estimateGas()).toString()
    });

    setInput("");
  };

  return (
    <div className={styles.container}>
      <div onClick={read} className={styles.button}>
        read()
      </div>

      <div onClick={write} className={styles.button}>
        write(
        <input
          type="text"
          placeholder="uint"
          value={input}
          onChange={e =>
            /^\d+$|^$/.test(e.target.value) && setInput(e.target.value)
          }
        />
        )
      </div>
    </div>
  );
}
