import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import Image from "next/image";
import AboutHero from "../assets/hero-about.jpg";
import Fade from "react-reveal/Fade";

const About = () => {
  return (
    <>
      <Navbar />

      <Image className="hero" src={AboutHero} height="100%" width="100%">
        <Fade top>
          <div className="hero__heading">Asian Wedding Photography</div>
        </Fade>
        <Fade bottom>
          <div className="hero__desc">MK Faim</div>
        </Fade>
      </Image>

      {/* <Footer /> */}
    </>
  );
};

export default About;

/*
<main className={styles.main}>
      <div className={styles.videoBg}>
        <video className={styles.video} src="/Images/Astronaut.mp4" autoPlay loop></video>
      </div>
      <div className={styles.info}>
        <h1 className={styles.title}>I'm Randeep Rana</h1>
        <p className={styles.description}>Full Stack Web Developer 🚀</p>
      </div>
    </main>

    */
