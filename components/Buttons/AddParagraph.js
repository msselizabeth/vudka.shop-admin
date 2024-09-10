import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Buttons.module.css";

const AddParagraph = ({onClick}) => {
  return (
    <button type="button" onClick={onClick} className={styles.addParagraph}>
          <FontAwesomeIcon icon={faPlus} className={styles.addParagraphIcon} /> Додати абзац
    </button>
  );
};

export default AddParagraph;
