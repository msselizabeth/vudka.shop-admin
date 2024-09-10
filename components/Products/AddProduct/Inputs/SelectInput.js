import styles from "../AddProduct.module.css";


const SelectInput = ({ label, name, value, onChange, options }) => {
    return (
      <div className={styles.fieldContainer}>
        <label className={styles.label}>{label}</label>
        <select name={name} value={value} onChange={onChange} className={styles.select}>
          <option value="">Оберіть значення:</option>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  };
  
  export default SelectInput;