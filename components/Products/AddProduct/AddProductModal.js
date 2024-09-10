import CloseButton from "@/components/Buttons/CloseButton";
import styles from "./AddProduct.module.css";

const AddProductModal = ({ onClose, children, isOpen }) => {
  if (!isOpen) return null; // Не отображаем, если модальное окно закрыто

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
      <CloseButton onClick={onClose} />
        {children}
      </div>
    </div>
  );
};

export default AddProductModal;
