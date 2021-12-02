import styles from "./Form.module.css";

const Textarea = ({ name, onChange, labelFor }) => {
  return (
    <label
      className={`${styles["custom-field"]} ${styles["text-area"]}`}
      for={labelFor}
    >
      <span className={styles["placeholder-textArea"]}>Message</span>
      <textarea name={name} onChange={onChange} rows={10} required />
    </label>
  );
};

export default Textarea;
