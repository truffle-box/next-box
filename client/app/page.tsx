import Image from "next/image";

export default function Home(): JSX.Element {
  return (
    <>
      <h1>Hello Next.js box</h1>
      <Image src="/truffle.svg" alt="Truffle logo" width={100} height={100} />
      <Image src="/next.svg" alt="Next.js logo" width={100} height={100} />
    </>
  );
}
