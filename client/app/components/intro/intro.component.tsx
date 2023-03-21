import Image from "next/image";

export function Intro(): JSX.Element {
  return (
    <section>
      <div>
        <div>
          <h1>
            Welcome to the&nbsp;
            <Image src="/truffle.svg" alt="Truffle" width={26} height={26} />
            &nbsp;+&nbsp;
            <Image src="/next.svg" alt="Next.js" width={83} height={20} />
            &nbsp;Box!
          </h1>
        </div>
        <p>
          This is everything you need to start using Truffle to write, compile,
          test, and deploy smart contracts, and interact with them from a
          Next.js app.
        </p>
      </div>

      <code>
        {`.\n`}
        {`├── client`}
        <span className="comment">{`    # Next.js project (v13 with App Router)\n`}</span>
        {`└── truffle`}
        <span className="comment">{`   # Truffle project`}</span>
      </code>

      <p>
        This particular Box uses&nbsp;
        <a href="https://web3js.org" target="_blank" rel="noreferrer">
          web3.js
        </a>
        , a popular Ethereum library.
      </p>
    </section>
  );
}
