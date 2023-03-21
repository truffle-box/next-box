import { useRef, useEffect } from "react";
import styles from "./contract.module.css";

interface ContractProps {
  value: string;
}

export function Contract({ value }: ContractProps): JSX.Element {
  const valueRef = useRef<HTMLElement>(null);

  useEffect(() => {
    valueRef.current?.classList.add(styles.flash);
    const flash = setTimeout(
      () => valueRef.current?.classList.remove(styles.flash),
      1000
    );
    return () => clearTimeout(flash);
  }, [value]);

  return (
    <code>
      {`contract SimpleStorage {
  uint256 value = `}
      <strong ref={valueRef} className={styles.value}>
        {value}
      </strong>
      {`;

  function read() public view returns (uint256) {
    return value;
  }

  function write(uint256 newValue) public {
    value = newValue;
  }
}`}
    </code>
  );
}
