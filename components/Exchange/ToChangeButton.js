
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../Rates/RatesList.module.css";

const ToChangeButton = ({onClick}) => {
  return (
    <button onClick={onClick} className={styles.editBtn}>
      <FontAwesomeIcon icon={faPenToSquare} />
    </button>
  );
};

export default ToChangeButton;
