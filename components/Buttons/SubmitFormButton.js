import styles from "./Buttons.module.css";

const SubmitFormButton = () => {
    return (
        <button type="submit" className={styles.submitButton}>
          Додати
        </button>);
}

export default SubmitFormButton;