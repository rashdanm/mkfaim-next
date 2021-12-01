import styles from "./Button.module.css";
import Link from "next/link";

const Button = ({ display, href, onClick, text }) => {
  return (
    <div style={{ display: display }}>
      <Link href={`/${href}`}>
        {/* ---- needs editing -------*/}
        <button onClick={onClick} className={styles["btn"]}>
          {text}
        </button>
      </Link>
    </div>
  );
};

export default Button;
