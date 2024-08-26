
import styles from "./ConfirmationModal.module.css";

const ConfirmationModal = ({ onConfirm, onCancel, element }) => {
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Підтвердіть видалення</h2>
              <p>Ви впевнені, що треба видалити <span>{element}</span> ?</p>
        <div className={styles.modalButtons}>
          <button onClick={onConfirm} className={styles.confirmButton}>
            Видалити
          </button>
          <button onClick={onCancel} className={styles.cancelButton}>
            Назад
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
