import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Buttons.module.css";

const AddProductButton = ({ onClick }) => {
    return (
        <button onClick={onClick} className={styles.addProductButton}>
            <FontAwesomeIcon icon={faPlus} className={styles.addProductButtonIcon} /> Додати товар
      </button>
    );
  };
  
  export default AddProductButton;