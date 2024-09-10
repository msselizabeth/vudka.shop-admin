import styles from "../AddProduct.module.css";


const CheckboxInput = ({label, name, checked, onChange}) => {

    return (<div className={styles.fieldContainer}>
        <label className={styles.label}>{label}</label>
        <input
          type="checkbox"
          name={name}
          checked={checked}
          onChange={onChange}
          className={styles.checkbox}
        />
      </div>);
}
export default CheckboxInput;