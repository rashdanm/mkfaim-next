import { useState, useRef } from "react";
import styles from "./Accordion.module.css";

function Accordian(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightActive] = useState("0px");
  const [setRotate, setRotateState] = useState("accordian__icon");

  const content = useRef(null);

  function toggleAccordian() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightActive(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setRotateState(
      setActive === "active" ? "accordian__icon" : "accordian__icon rotate"
    );

    console.log(content.current.scrollHeight);
  }

  return (
    <div className={styles["accordion-section"]}>
      <button
        className={`${styles["accordion"]} ${styles[{ setActive }]}`}
        onClick={toggleAccordian}
      >
        <p className={styles["title"]}>{props.title}</p>
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className={styles["content"]}
      >
        <div
          className={styles["text"]}
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  );
}

export default Accordian;
