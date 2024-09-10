
import { useRef } from "react";
import styles from "../AddProduct.module.css";

const ImagesInput = ({ imagePreviews, onChange, name, label }) => {
    
    const fileInputRef = useRef(null);

    const handleClick = () => {
      // Открываем стандартное окно выбора файлов при нажатии на кастомную кнопку
      fileInputRef.current.click();
    };
  
  return (
    <div className={styles.fieldContainer}>
          <label className={styles.label}>{label}</label>
      <input
        type="file"
        name={name}
        multiple
              onChange={onChange}
              ref={fileInputRef}  // Связываем реф с input
              style={{ display: 'none' }} 
        
          />
          <button type="button" className={styles.customButton} onClick={handleClick}>
        Додати фото
      </button>
      <div className={styles.imagePreview}>
        {imagePreviews.map((src, index) => (
          <img key={index} src={src} alt={`Preview ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};
export default ImagesInput;