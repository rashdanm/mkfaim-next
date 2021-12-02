import styles from "./Form.module.css";

const Label = ({ className, placeholder, type, name, onChange, labelFor }) => {
  return (
    <label className={styles["custom-field"]} for={labelFor}>
      <input
        type={type}
        name={name}
        onChange={onChange}
        autoComplete="off"
        required
      />
      <span className={styles[`${className}`]}>{placeholder}</span>
    </label>
  );
};

export default Label;
