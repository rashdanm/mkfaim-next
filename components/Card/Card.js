import styles from "./Card.module.css";
import Fade from "react-reveal/Fade";

const Card = ({ src, heading, text }) => {
  return (
    <div className={styles["card"]}>
      <Fade>
        <div className={styles["image-wrapper"]}>
          <img src={src} alt="mkfaim" />
        </div>
      </Fade>
      <Fade bottom>
        <h3 className={styles["heading"]}>{heading}</h3>
      </Fade>
      <Fade bottom>
        <p className={styles["text"]}>{text}</p>
      </Fade>
    </div>
  );
};

export default Card;
