import { useState, useRef } from "react";
import styles from "./Accordion.module.css";
import Chevron from "./Chevron";
import { FiChevron } from "react-icons/fi";

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
      <button className={`accordian ${setActive}`} onClick={toggleAccordian}>
        <p className={styles["title"]}>{props.title}</p>
        <Chevron className={`${setRotate}`} width={10} fill={"#777"} />
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
