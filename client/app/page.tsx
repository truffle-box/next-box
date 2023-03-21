import Image from "next/image";
import { Intro } from "@/components/intro";
import { Setup } from "@/components/setup";
import { Demo } from "@/components/demo";
import { Footer } from "@/components/footer";
import styles from "./page.module.css";

export default function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <h1>Hello Next.js box</h1>
      <Image src="/truffle.svg" alt="Truffle logo" width={100} height={100} />
      <Image src="/next.svg" alt="Next.js logo" width={100} height={100} />
      <Intro />
      <Setup />
      <Demo />
      <Footer />
    </div>
  );
}
