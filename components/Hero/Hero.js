import styles from "./Hero.module.css";
import Image from "next/image";
import Fade from "react-reveal/Fade";

const Hero = () => {
  return (
    <main className={styles.main}>
      <div className={styles.imageBg}>
        <Image
          className={styles.image}
          src="/images/hero-about.jpg"
          layout="fill"
          objectPosition="center"
        ></Image>
      </div>
      <div className={styles.info}>
        <h1 className={styles.title}>Asian Wedding Photography</h1>
        <p className={styles.description}>MK Faim</p>
      </div>
    </main>
  );
};

export default Hero;
