import styles from "./HeroCarousel.module.css";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const SlideShow = () => {
  const properties = {
    autoplay: true,
    arrows: false,
    transitionDuration: 3000,
    duration: 5000,
    infinite: true,
    easing: "ease-in, ease-out",
  };

  return (
    <div className={styles["main"]}>
      <Fade {...properties} className={styles["imageBg"]}>
        <div
          className={styles.image}
          id={styles["one"]}
          // style={{ backgroundImage: `url("/images/home/home1.jpg")` }}
        ></div>
        <div
          className={styles.image}
          id={styles["two"]}
          // style={{ backgroundImage: `url("/images/home/home2.jpg")` }}
        ></div>
        <div
          className={styles.image}
          id={styles["three"]}
          // style={{ backgroundImage: `url("/images/home/home3.jpg")` }}
        ></div>
        <div
          className={styles.image}
          id={styles["four"]}
          // style={{ backgroundImage: `url("/images/home/home4.jpg")` }}
        ></div>
      </Fade>

      <div className={styles.info}>
        <h1 className={styles.title}>Asian Wedding Photography</h1>
        <p className={styles.description}>MK Faim</p>
      </div>
    </div>
  );
};

export default SlideShow;

{
  /* <div className="each-fade">
<div
  className="sliderImage"
  style={{ backgroundImage: `url("/images/home/home2.jpg")` }}
></div>
</div>
<div className="each-fade">
<div
  className="sliderImage"
  style={{ backgroundImage: `url("/images/home/home3.jpg")` }}
></div>
</div>
<div className="each-fade">
<div
  className="sliderImage"
  style={{ backgroundImage: `url("/images/home/home4.jpg")` }}
></div>
</div> */
}
