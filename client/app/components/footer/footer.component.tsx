import Link from "next/link";
import styles from "./footer.module.css";

export function Footer(): JSX.Element {
  return (
    <footer>
      <h2>More resources</h2>

      <nav className={styles.nav}>
        <Link href="https://trufflesuite.com" target="_blank">
          Truffle
        </Link>
        <Link href="https://ethereum.org" target="_blank">
          Ethereum
        </Link>
        <Link href="https://soliditylang.org" target="_blank">
          Solidity
        </Link>
        <Link href="https://nextjs.org" target="_blank">
          Next.js
        </Link>
        <Link href="https://react.dev" target="_blank">
          React
        </Link>
      </nav>
    </footer>
  );
}
