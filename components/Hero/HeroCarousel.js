import styles from "./HeroCarousel.module.css";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const SlideShow = () => {
  const properties = {
    autoplay: true,
    pauseOnHover: false,
    arrows: false,
    transitionDuration: 1500,
    duration: 3000,
    infinite: true,
    easing: "ease-in, ease-out",
  };

  const images = ["one", "two", "three", "four"];

  return (
    <div className={styles["main"]}>
      <Fade {...properties} className={styles["imageBg"]}>
        {images.map((image, index) => (
          <div
            key={index}
            className={styles.image}
            id={styles[`${image}`]}
          ></div>
        ))}
      </Fade>

      <div className={styles.info}>
        <h1 className={styles.title}>Luxury Asian Wedding Photography</h1>
        <p className={styles.description}>MK Faim</p>
      </div>
    </div>
  );
};

export default SlideShow;
