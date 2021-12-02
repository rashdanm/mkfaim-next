import styles from "./Form.module.css";

const Label = ({
  className,
  placeholder,
  type,
  value,
  name,
  onChange,
  labelFor,
}) => {
  return (
    <label className={styles["custom-field"]} for={labelFor}>
      <input
        type={type}
        name={name}
        onChange={onChange}
        value={value}
        autoComplete="off"
        required
      />
      <span className={styles[`${className}`]}>{placeholder}</span>
    </label>
  );
};

export default Label;
