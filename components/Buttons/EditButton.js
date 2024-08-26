import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Buttons.module.css";

 const EditButton = ({ onClick }) => (
    <button onClick={onClick} className={styles.editButton}>
         <FontAwesomeIcon icon={faPenToSquare} style={{ 
      fontSize: '20px'
    }}/>
    </button>
 );
  
export default EditButton;