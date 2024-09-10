import styles from "../AddProduct.module.css";

const TextInput = ({name, value, onChange, placeholder, label}) => {
  return (
      <div className={styles.fieldContainer}>
          <label className={styles.label}>{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        className={styles.input}
        placeholder={`Наприклад: ${placeholder}`}
      />
    </div>
  );
};

export default TextInput;
