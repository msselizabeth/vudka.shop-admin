
import styles from "../AddProduct.module.css";

const NumberInput = ({onChange, placeholder, value, name, label}) => {
  return (
    <div className={styles.fieldContainer}>
          <label className={styles.label}>{label}:</label>
      <input
              required
              type="number"
              name={name}
              value={value}
              onChange={onChange}
              placeholder={`Наприклад: ${placeholder}`}
              className={styles.input}
      />
    </div>
  );
};

export default NumberInput;
