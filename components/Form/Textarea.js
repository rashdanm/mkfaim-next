import styles from "./Form.module.css";

const Textarea = ({ name, onChange, labelFor, value }) => {
  return (
    <label
      className={`${styles["custom-field"]} ${styles["text-area"]}`}
      for={labelFor}
    >
      <span className={styles["placeholder-textArea"]}>Message</span>

      <textarea
        className={styles["textarea"]}
        name={name}
        onChange={onChange}
        value={value}
        rows={10}
        required
      />
      <span className={styles["error-textarea"]}>Please type a message</span>
    </label>
  );
};

export default Textarea;
