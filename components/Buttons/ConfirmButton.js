import styles from "./Buttons.module.css";

const ConfirmButton = ({ onClick }) => {
    
    return (<button onClick={onClick} className={styles.confirmButton}>Підтвердити</button>)
}

export default ConfirmButton;