import styles from "./MainText.module.css";
import Button from "../Button/Button";
import Fade from "react-reveal/Fade";

function MainText({
  heading,
  p1,
  p2,
  p3,
  image,
  href,
  text,
  onClick,
  display,
}) {
  return (
    <div className={styles["main"]}>
      <div>
        <Fade bottom>
          <h2 className={styles["heading"]}>{heading}</h2>
        </Fade>
        <Fade left>
          <div
            className={styles["image"]}
            style={{ backgroundImage: `url(${image})` }}
          />
        </Fade>
      </div>
      <div>
        <Fade bottom>
          <p className={styles["text"]}>{p1}</p>
        </Fade>
        <Fade bottom>
          <p className={styles["text"]}>{p2}</p>
        </Fade>
        <Fade bottom>
          <p className={styles["text"]}>{p3}</p>
        </Fade>
        <div className={styles["btn-wrapper"]}>
          <Fade right>
            <Button
              href={href}
              text={text}
              onClick={onClick}
              display={display}
            />
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default MainText;
