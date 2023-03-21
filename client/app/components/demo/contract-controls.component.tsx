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
    web3,
    account,
    contracts: { simpleStorage }
  } = useEth() as ContextValueReady;
  const [input, setInput] = useState("");
  const [writing, setWriting] = useState(false);

  const read = async () => {
    const value = await simpleStorage.methods.read().call();
    setValue(value.toString());
  };

  const write: React.MouseEventHandler<HTMLElement> = async e => {
    if ((e.target as HTMLElement).tagName === "INPUT") return;
    if (!input) return alert("Please enter a value to write.");

    setWriting(true);
    const writeMethod = simpleStorage.methods.write(input);
    try {
      const gas = (await writeMethod.estimateGas()).toString();
      const { baseFeePerGas } = await web3.eth.getBlock("pending");
      const maxFeePerGas = (baseFeePerGas! * BigInt(2)).toString();
      await writeMethod.send({
        from: account,
        gas,
        maxFeePerGas
      });
    } catch {}
    setInput("");
    setWriting(false);
  };

  return (
    <div className={styles.container}>
      <div onClick={read} className={styles.button}>
        read()
      </div>

      <div
        onClick={writing ? () => {} : write}
        className={styles.button + " " + (writing ? styles.disabled : "")}
      >
        write(
        <input
          type="text"
          placeholder="uint"
          value={input}
          disabled={writing}
          onChange={e =>
            /^\d+$|^$/.test(e.target.value) && setInput(e.target.value)
          }
        />
        )
      </div>
    </div>
  );
}
