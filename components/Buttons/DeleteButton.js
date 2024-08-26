import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Buttons.module.css";

 const DeleteButton = ({ onClick }) => (
    <button onClick={onClick} className={styles.deleteButton}>
         <FontAwesomeIcon icon={faTrash} style={{ 
      fontSize: '20px'
    }}/>
    </button>
 );
  
export default DeleteButton;