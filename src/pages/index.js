import Head from "next/head";
import styles from "../styles/Home.module.css";
import Login from "./login";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Admin Order Best Food</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Login/>
    </div>
  );
}
