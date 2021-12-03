import styles from "./Form.module.css";

const Textarea = ({ name, onChange, labelFor, value, errorMessage }) => {
  return (
    <label
      className={`${styles["custom-field"]} ${styles["text-area"]}`}
      htmlFor={labelFor}
    >
      <span className={styles["placeholder-textArea"]}>Message</span>
      <div className={styles["error-textarea"]}>{errorMessage}</div>
      <textarea
        className={styles["textarea"]}
        name={name}
        onChange={onChange}
        value={value}
        rows={10}
      />
    </label>
  );
};

export default Textarea;
