import DeleteButton from "@/components/Buttons/DeleteButton";
import styles from "../AddProduct.module.css";
import AddParagraph from "@/components/Buttons/AddParagraph";

const DescriptionInput = ({description, onDelete, onChange, onAdd}) => {
    return (<div className={styles.fieldContainer}>
        <label className={styles.label}>Опис:</label>
        <div className={styles.descriptionContainer}>
          {description.map((desc, index) => (
              <div className={styles.textareaContainer}>
              <textarea
                      key={index}
                      name="description"
                      value={desc.text}
                      onChange={(e) => onChange(e, index)}
                      placeholder={`Абзац ${index + 1}`}
                      className={styles.textarea}
              />
              <DeleteButton
                onClick={() => onDelete(index)}
              />
            </div>
          ))}
          <AddParagraph onClick={onAdd} />
        </div>
      </div>)
}

export default DescriptionInput;