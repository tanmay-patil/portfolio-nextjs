import Head from "next/head";
import styles from "../styles/Home.module.css";
import Home from "../components/home";

export default function Main() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tanmay Patil</title>
        <meta
          lang="en"
          name="description"
          content="Know more about the journey of Tanmay Patil"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Home />
    </div>
  );
}
