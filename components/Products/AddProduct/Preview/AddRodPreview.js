import ConfirmButton from "@/components/Buttons/ConfirmButton";
import styles from "../AddProduct.module.css";
import BackButton from "@/components/Buttons/BackButton";
import YesComponent from "@/components/Highlights/YesComponent";
import NoComponent from "@/components/Highlights/NoComponent";

const AddRodPreview = ({ onClick, rodData, imagePreviews, handleSubmit }) => {
  return (
    <>
      <div className={styles.dataPreview}>
        <h3 className={styles.formTitle}>Перегляд введеної інформації:</h3>
        <table className={styles.dataPreviewTable}>
          <tbody>
            <tr>
              <th>Показувати на сайті:</th>
              <td>{rodData.render ? <YesComponent /> : <NoComponent />}</td>
            </tr>

            <tr>
              <th>Категорія вудилища:</th>
              <td>{rodData.purpose}</td>
            </tr>

            <tr>
              <th>Ціна (звичайна):</th>
              <td>{rodData.price}</td>
            </tr>

            <tr>
              <th>Кількість на складі:</th>
              <td>{rodData.stock}</td>
            </tr>

            <tr>
              <th>Група знижки:</th>
              <td>{rodData.discount}</td>
            </tr>

            <tr>
              <th>Розпродаж:</th>
              <td>{rodData.sale ? <YesComponent /> : <NoComponent />}</td>
            </tr>

            <tr>
              <th>Ціна (розпродаж):</th>
              <td>{rodData.salePriceMain}</td>
            </tr>

            <tr>
              <th>Опис:</th>
              <td >
                {rodData.description.map((desc, index) => (
                  <p key={index} className={styles.descriptionText}>{desc.text}</p>
                ))}
              </td>
            </tr>

            <tr>
              <th>Тип вудилища:</th>
              <td>{rodData.typerods}</td>
            </tr>

            <tr>
              <th>Штрих-код:</th>
              <td>{rodData.code}</td>
            </tr>

            <tr>
              <th>Назва (тип вудилища):</th>
              <td>{rodData.name}</td>
            </tr>

            <tr>
              <th>Бренд:</th>
              <td>{rodData.brand}</td>
            </tr>

            <tr>
              <th>Серія:</th>
              <td>{rodData.series}</td>
            </tr>

            <tr>
              <th>Модель:</th>
              <td>{rodData.model}</td>
            </tr>

            <tr>
              <th>Артикль:</th>
              <td>{rodData.item}</td>
            </tr>

            <tr>
              <th>Тест (мінімальний):</th>
              <td>{rodData.testMin}</td>
            </tr>

            <tr>
              <th>Тест (максимальний):</th>
              <td>{rodData.testMax}</td>
            </tr>

            <tr>
              <th>Тест (lb):</th>
              <td>{rodData.testLb}</td>
            </tr>

            <tr>
              <th>Довжина вудилища:</th>
              <td>{rodData.rodSize}</td>
            </tr>

            <tr>
              <th>Траспортувальна довжина:</th>
              <td>{rodData.transSize}</td>
            </tr>

            <tr>
              <th>Вага:</th>
              <td>{rodData.weight}</td>
            </tr>

            <tr>
              <th>Дія бланку:</th>
              <td>{rodData.action}</td>
            </tr>

            <tr>
              <th>Клас вудилища:</th>
              <td>{rodData.rodClass}</td>
            </tr>

            <tr>
              <th>Конструкція вудилища:</th>
              <td>{rodData.design}</td>
            </tr>

            <tr>
              <th>Кількість секцій:</th>
              <td>{rodData.section}</td>
            </tr>

            <tr>
              <th>Тип кілець:</th>
              <td>{rodData.guideType}</td>
            </tr>

            <tr>
              <th>Країна:</th>
              <td>{rodData.country}</td>
            </tr>

            {/* Превью изображений */}
            <tr>
              <th>Зображення:</th>
              <td>
                <div className={styles.imagePreview}>
                  {imagePreviews.map((src, index) => (
                    <img
                      key={index}
                      src={src}
                      alt={`Preview ${index + 1}`}
                      style={{ width: "100px", margin: "10px" }}
                    />
                  ))}
                </div>
              </td>
            </tr>

            <tr>
              <th>Альтернативний текст фото:</th>
              <td>{rodData.alt}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={styles.previewBtnsContainer}>
        <ConfirmButton onClick={handleSubmit} />

        <BackButton onClick={onClick} />
      </div>
    </>
  );
};

export default AddRodPreview;
