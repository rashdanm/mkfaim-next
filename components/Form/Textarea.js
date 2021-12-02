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
    </label>
  );
};

export default Textarea;
