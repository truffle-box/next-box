import styles from "./setup.module.css";

export function Setup(): JSX.Element {
  return (
    <section className={styles.container}>
      <h2>Preparation</h2>

      <details className={styles.accordion}>
        <summary>Install</summary>
        <p>Install Truffle and Ganache globally.</p>
        <code>$ npm install -g truffle ganache</code>
      </details>

      <details className={styles.accordion}>
        <summary>Ganache and MetaMask</summary>
        <p>
          Open a terminal and run Ganache, a simulated Ethereum blockchain on
          your machine.
        </p>
        <code>$ ganache</code>
        <p>
          From the list of generated private keys, import the first one into
          MetaMask.
        </p>
      </details>

      <details className={styles.accordion}>
        <summary>Truffle</summary>
        <p>
          Keep Ganache running and open another terminal. Let's compile and
          deploy our contract to Ganache.
        </p>
        <code>
          {`$ cd truffle\n`}
          {`$ truffle migrate --network development\n`}
          <span className="comment">
            # The `development` network points to Ganache. Networks can be
            configured in truffle/truffle-config.js
          </span>
        </code>
      </details>
    </section>
  );
}
