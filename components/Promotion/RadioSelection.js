import styles from "./PromotionToggle.module.css";

const RadioSelection = ({ enablePromotion, onChange }) => {
  return (
    <div className={styles.radioContainer}>
      <label className={styles.radioLabel}>
        <input
          type="radio"
          name="promotion"
          value="true"
          checked={enablePromotion === true}
          onChange={onChange}
        />
        Активувати знижку
      </label>

      {/* <label className={styles.radioLabel}>
        <input
          type="radio"
          name="promotion"
          value="false"
          checked={enablePromotion === false}
          onChange={onChange}
        />
        Вимкнути знижку
      </label> */}
    </div>
  );
};

export default RadioSelection;
