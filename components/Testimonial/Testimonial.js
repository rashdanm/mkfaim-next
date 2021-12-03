import styles from "./Testimonial.module.css";
import testimonialInfo from "../../data/testimonialInfo";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Fade from "react-reveal/Fade";

function TestimonialSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    className: "slider",
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          focusOnSelect: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={styles["main"]}>
      <Fade>
        <h1 className={styles["heading"]}>Testimonials</h1>
      </Fade>
      <Slider {...settings}>
        {testimonialInfo.map((item) => (
          <div key={item.id} className={styles["card"]}>
            <Fade>
              <div className={styles["image-wrapper"]}>
                <img
                  src={"/images/testimonial/" + item.image + ".jpg"}
                  alt="happy couple"
                />
              </div>
            </Fade>
            <Fade>
              <div className={styles["text-container"]}>
                <div className={styles["highlight"]}>{item.highlight}</div>
                <div className={styles["comment"]}>
                  <p>{item.comment}</p>
                </div>
                <div className={styles["couple"]}>{item.couple}</div>
              </div>
            </Fade>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default TestimonialSlider;
