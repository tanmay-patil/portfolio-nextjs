import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tanmay Patil</title>
        <meta
          name="description"
          content="Know more about the journey of Tanmay Patil"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to{" "}
          <a href="https://tanmay-patil.vercel.app/">Tanmay&apos;s Portfolio</a>
        </h1>
        <h2>Under construction. Check back soon!</h2>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by lots of diet coke and sleepless nights
        </a>
      </footer>
    </div>
  );
}
