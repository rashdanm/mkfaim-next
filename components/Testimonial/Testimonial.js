import Slider from "react-slick";
import testimonialInfo from "../../data/testimonialInfo";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    <div className="slider-container">
      <Slider {...settings}>
        {testimonialInfo.map((item) => (
          <>
            <div className="testimonial-image">
              <img
                src={
                  require("../../assets/testimonial/" + item.image + ".jpg")
                    .default
                }
                alt="happy couple"
              />
            </div>

            <div className="testimonial-text-container">
              <div className="testimonial-highlight">{item.highlight}</div>
              <div className="testimonial-comment">
                <p>{item.comment}</p>
              </div>
              <div className="testimonial-couple">{item.couple}</div>
            </div>
          </>
        ))}
      </Slider>
    </div>
  );
}

export default TestimonialSlider;
