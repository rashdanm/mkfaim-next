import styles from "./Hero.module.css";
import Image from "next/image";
import Fade from "react-reveal/Fade";

const Hero = ({ heading, text, imageId }) => {
  return (
    <main className={styles.main}>
      <div className={styles.imageBg}>
        <div className={styles.hero} id={styles[`${imageId}`]}></div>
        {/* <Image
          className={styles.image}
          src="/images/hero-about.jpg"
          layout="fill"
          objectPosition="center"
        ></Image> */}
      </div>
      <div className={styles.info}>
        <h1 className={styles.title}>{heading}</h1>
        <p className={styles.description}>{text}</p>
      </div>
    </main>
  );
};

export default Hero;
