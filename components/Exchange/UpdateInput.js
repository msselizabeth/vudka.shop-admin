import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../Rates/RatesList.module.css";
import { faRectangleXmark, faSquareCheck } from "@fortawesome/free-solid-svg-icons";

const UpdateInput = ({value, onChange, disabled, saveRate, setEditTarget}) => {
  return (
    <div className={styles.rateInputContainer}>
      <input
        type="number"
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={styles.rateInput}
      />
      <button onClick={saveRate}><FontAwesomeIcon icon={faSquareCheck} className={styles.saveButton} /></button>
      <button onClick={() => setEditTarget(null)}><FontAwesomeIcon icon={faRectangleXmark} className={styles.cancelButton} /></button>
    </div>
  );
};

export default UpdateInput;
