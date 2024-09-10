import styles from "./Buttons.module.css";

const BackButton = ({ onClick }) => {
  return <button onClick={onClick} className={styles.backButton}>Назад</button>;
};

export default BackButton;
