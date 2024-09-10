// import TextInput from "../../AddProduct/Inputs/TextInput";
import DescriptionInput from "../Inputs/DescriptionInput";
import NumberInput from "../Inputs/NumberInput";
import SelectInput from "../Inputs/SelectInput";
import {
  actionOptions,
  designOptions,
  discountOptions,
  purposeOptions,
  rodClassOptions,
  sectionOptions,
  typeRodOptions,
} from "@/data/rodsSelectOpltions";
import CheckboxInput from "../Inputs/CheckboxInput";
import ImagesInput from "../Inputs/ImagesInput";

import styles from "../AddProduct.module.css";
import TextInput from "../Inputs/TextInput";
import SubmitFormButton from "@/components/Buttons/SubmitFormButton";

const AddRodForm = ({
  onSubmit,
  removeDescriptionParagraph,
  handleChange,
  rodData,
  handleImageChange,
  handleDescriptionChange,
    addDescriptionParagraph,
    imagePreviews,
}) => {
  return (
    <>
      <h3 className={styles.formTitle}>Форма додавання нового вудилища</h3>
      <form onSubmit={onSubmit} className={styles.form}>
        <CheckboxInput
          name={"render"}
          checked={rodData.render}
          onChange={handleChange}
          label={"Показувати на сайті:"}
        />

        <SelectInput
          label="Категорія вудилища:"
          name="purpose"
          value={rodData.purpose}
          onChange={handleChange}
          options={purposeOptions}
        />

        <TextInput
          name={"price"}
          value={rodData.price}
          onChange={handleChange}
          placeholder={"111.09 або 110"}
          label={"Ціна(звичайна):"}
        />

        <NumberInput
          placeholder={"1/2/3(ціле число)."}
          onChange={handleChange}
          name={"stock"}
          value={rodData.stock}
          label={"Кількість на складі:"}
        />

        <SelectInput
          label="Група знижки"
          name="discount"
          value={rodData.discount}
          onChange={handleChange}
          options={discountOptions}
        />

        <CheckboxInput
          name={"sale"}
          checked={rodData.sale}
          onChange={handleChange}
          label={"Розпродаж:"}
        />

        <TextInput
          name={"salePriceMain"}
          value={rodData.salePriceMain}
          onChange={handleChange}
          placeholder={"111.09 або 110"}
          label={"Ціна(розпродаж):"}
        />

        {/* description */}

        <DescriptionInput
          description={rodData.description}
          onChange={handleDescriptionChange}
          onDelete={removeDescriptionParagraph}
          onAdd={addDescriptionParagraph}
        />

        <SelectInput
          label="Тип вудилища:"
          name="typerods"
          value={rodData.typerods}
          onChange={handleChange}
          options={typeRodOptions}
        />

        <TextInput
          name={"code"}
          value={rodData.code}
          onChange={handleChange}
          placeholder={"008769230450"}
          label={"Штрих-код:"}
        />

        <TextInput
          name={"name"}
          value={rodData.name}
          onChange={handleChange}
          placeholder={"Фідерне вудилище або коропове вудилище"}
          label={"Назва(тип вудилища):"}
        />

        <TextInput
          name={"brand"}
          value={rodData.brand}
          onChange={handleChange}
          placeholder={"Shimano або Daiwa"}
          label={"Бренд:"}
        />

        <TextInput
          name={"series"}
          value={rodData.series}
          onChange={handleChange}
          placeholder={"Catana"}
          label={"Серія:"}
        />

        <TextInput
          name={"model"}
          value={rodData.model}
          onChange={handleChange}
          placeholder={"62UL, 72MH"}
          label={"Модель:"}
        />

        <TextInput
          name={"item"}
          value={rodData.item}
          onChange={handleChange}
          placeholder={"SED61ULFE"}
          label={"Артикль:"}
        />

        <TextInput
          name={"testMin"}
          value={rodData.testMin}
          onChange={handleChange}
          placeholder={"0.5 або 2"}
          label={"Тест(мінімальний):"}
        />

        <TextInput
          name={"testMax"}
          value={rodData.testMax}
          onChange={handleChange}
          placeholder={"15 або 20.5"}
          label={"Тест(максимальний):"}
        />

        <TextInput
          name={"testLb"}
          value={rodData.testLb}
          onChange={handleChange}
          placeholder={"3.75"}
          label={"Тест(lb):"}
        />

        <TextInput
          name={"rodSize"}
          value={rodData.rodSize}
          onChange={handleChange}
          placeholder={"2.10"}
          label={"Довжина вудилища:"}
        />

        <TextInput
          name={"transSize"}
          value={rodData.transSize}
          onChange={handleChange}
          placeholder={"0.5 або 2"}
          label={"Траспортувальна довжина:"}
        />

        <TextInput
          name={"weight"}
          value={rodData.weight}
          onChange={handleChange}
          placeholder={"250 або 370"}
          label={"Вага:"}
        />

        <SelectInput
          label="Дія бланку:"
          name="action"
          value={rodData.action}
          onChange={handleChange}
          options={actionOptions}
        />

        <SelectInput
          label="Клас вудилища:"
          name="rodClass"
          value={rodData.rodClass}
          onChange={handleChange}
          options={rodClassOptions}
        />

        <SelectInput
          label="Конструкція вудилища:"
          name="design"
          value={rodData.design}
          onChange={handleChange}
          options={designOptions}
        />

        <SelectInput
          label="Кількість секцій:"
          name="section"
          value={rodData.section}
          onChange={handleChange}
          options={sectionOptions}
        />

        <TextInput
          name={"guideType"}
          value={rodData.guideType}
          onChange={handleChange}
          placeholder={"seaguide"}
          label={"Тип кілець:"}
        />

        <TextInput
          name={"country"}
          value={rodData.country}
          onChange={handleChange}
          placeholder={"Україна"}
          label={"Країна:"}
        />

        <ImagesInput
          label={"Зображення(додайте одразу всі в порядку відображення):"}
          name="images"
          onChange={handleImageChange}
          imagePreviews={imagePreviews}
        />

        <TextInput
          name={"alt"}
          value={rodData.alt}
          onChange={handleChange}
          placeholder={"купити вудилище ... в магазині..."}
          label={"Альтернативний текст фото:"}
        />

        <SubmitFormButton />
      </form>
    </>
  );
};

export default AddRodForm;
