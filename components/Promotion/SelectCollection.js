import styles from "./PromotionToggle.module.css";

const SelectCollection = ({value, onChange}) => {
  return (
    <div className={styles.selectContainer}>
      <label>Колекція:</label>
      <select
        value={value}
              onChange={onChange}
              className={styles.select}
      >
        <option value="Rod">Вудилища</option>
        <option value="Reel">Котушки</option>
        <option value="Lures">Приманки</option>
      </select>
    </div>
  );
};

export default SelectCollection;
