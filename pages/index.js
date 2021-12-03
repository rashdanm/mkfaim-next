import Head from "next/head";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar/Navbar";
import HeroCarousel from "../components/Hero/HeroCarousel";
import Footer from "../components/Footer/Footer";
import MainText from "../components/MainText/MainText";
import Testimonial from "../components/Testimonial/Testimonial";
import homeInfo from "../data/homeInfo";
import Card from "../components/Card/Card";

export default function Home() {
  return (
    <div className={styles.Home}>
      <Head>
        <title>MK Faim Photography</title>
        <meta name="description" content="MK Faim Photograhy" />
        <link rel="shortcut icon" href="static/favicon.ico" />
      </Head>
      <Navbar />
      <HeroCarousel />
      <MainText
        showImage="none"
        heading="Hi, here's a little bit about me"
        p1="My name is Faim and im a London based photographer working across the UK. I look to
            create a story at every event I attend. The best part about doing this job is the amazing
              clients that I meet and how some turn into amazing friends!"
        p2="Capturing the small things is what I love the most - the hugs, the drops of tears, the laughter at
            the couple shoot. These are the moments that I want to capture for you."
        p3="Have a look through the site and I can't wait to work with you soon"
        text="About"
        href="about"
      />
      <div className={styles["card-section"]}>
        {homeInfo.map((item) => (
          <Card
            key={item.id}
            src={"/images/home/" + item.image + ".jpg"}
            heading={item.heading}
            text={item.text}
          />
        ))}
      </div>
      <Testimonial />
      <MainText
        showImage="none"
        heading="Let's work together"
        p1="I cant wait to be a part of your special day. Hit the button below to send an enquiry and let's
        arrange a chat or a coffee."
        text="Contact"
        href="contact"
      />
      <Footer />
    </div>
  );
}
