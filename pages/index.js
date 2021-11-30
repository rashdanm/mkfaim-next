import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div className={styles.Home}>
      <Head>
        <title>MK Faim Photography</title>
        <meta name="description" content="MK Faim by rashdan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Footer />
    </div>
  );
}
