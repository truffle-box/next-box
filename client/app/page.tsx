import { Intro } from "@/components/intro";
import { Setup } from "@/components/setup";
import { Demo } from "@/components/demo";
import { Footer } from "@/components/footer";
import styles from "./page.module.css";

export default function Home(): JSX.Element {
  return (
    <div className={styles.container}>
      <Intro />
      <Setup />
      <Demo />
      <Footer />
    </div>
  );
}
