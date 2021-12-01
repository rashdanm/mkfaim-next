import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar/Navbar";
import HeroCarousel from "../components/Hero/HeroCarousel";
import Footer from "../components/Footer/Footer";
import MainText from "../components/MainText/MainText";

export default function Home() {
  return (
    <div className={styles.Home}>
      <Head>
        <title>MK Faim Photography</title>
        <meta name="description" content="MK Faim by rashdan" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <HeroCarousel />
      <MainText
        heading="Hi here is a little about me"
        p1="My name is Faim and im a London based photographer working across the UK who looks to
            create a story at every event I attend. The best part about doing this job is the amazing
              clients that I meet and how some turn into amazing friends!"
        p2="Capueting the small things is what I love the most, the hugs the dop of tear, the laughter at
            the couple shoot, these are the moments that I want to capture for you."
        text="About"
        href="about"
      />
      <Footer />
    </div>
  );
}
