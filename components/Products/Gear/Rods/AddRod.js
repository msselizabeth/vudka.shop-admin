"use client";
import { useState } from "react";
import axios from "axios";
import AddProductButton from "@/components/Buttons/AddProductButton";
import AddProductModal from "../../AddProduct/AddProductModal";
import AddRodForm from "../../AddProduct/Forms/AddRodForm";
import AddRodPreview from "../../AddProduct/Preview/AddRodPreview";
import { toast } from "react-toastify";

const AddRod = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPreviewModalOpen, setIsPreviewModalOpen] = useState(true);
  const [rodData, setRodData] = useState({
    render: false,
    purpose: "",
    price: "",
    stock: 0,

    discount: "",
    sale: false,
    salePriceMain: "",
    code: "",
    description: [{ text: "" }],
    typerods: "",
    name: "",
    brand: "",
    series: "",
    model: "",
    item: "",
    testMin: "",
    testMax: "",
    testLb: "",
    rodSize: "",
    transSize: "",
    weight: "",
    action: "",
    rodClass: "",
    design: "",
    section: "",
    guideType: "",
    country: "",
    alt: "",
  });

  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setRodData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files); // Преобразуем в массив
    setImages(files);

    // Предварительный просмотр изображений
    const previews = files.map((file) => URL.createObjectURL(file));
    setImagePreviews(previews);
  };

  const handleDescriptionChange = (e, index) => {
    const updatedDescription = rodData.description.map((desc, i) =>
      i === index ? { text: e.target.value } : desc
    );
    setRodData((prevData) => ({
      ...prevData,
      description: updatedDescription,
    }));
  };

  // Добавление нового абзаца
  const addDescriptionParagraph = () => {
    setRodData((prevData) => ({
      ...prevData,
      description: [...prevData.description, { text: "" }],
    }));
  };
  const removeDescriptionParagraph = (index) => {
    const updatedDescription = rodData.description.filter(
      (_, i) => i !== index
    );
    setRodData((prevData) => ({
      ...prevData,
      description: updatedDescription,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    images.forEach((image, index) => {
      formData.append(`images`, image); 
    });

    // Добавляем обычные поля
    Object.keys(rodData).forEach((key) => {
      if (key !== "description") {
        formData.append(key, rodData[key]);
      }
    });

    // Добавляем элементы description как отдельные поля массива
    rodData.description.forEach((desc, index) => {
      formData.append(`description[${index}][text]`, desc.text); // Для каждого элемента массива description
    });

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/admin-rods`,
        formData
      );
      toast.success("Товар додано в базу даних успішно.");
      // Очистка формы после успешной отправки
      setRodData({
        render: false,
        purpose: "",
        price: "",
        stock: 0,

        discount: "",
        sale: false,
        salePriceMain: "",
        code: "",
        description: [{ text: "" }],
        typerods: "",
        name: "",
        brand: "",
        series: "",
        model: "",
        item: "",
        testMin: "",
        testMax: "",
        testLb: "",
        rodSize: "",
        transSize: "",
        weight: "",
        action: "",
        rodClass: "",
        design: "",
        section: "",
        guideType: "",
        country: "",
        alt: "",
      });
      setImages([]);
      setIsPreviewModalOpen(false);
      setIsModalOpen(false);
    } catch (error) {
      if (error.response.status === 400) { toast.error("Помилка валідації форми, перевірте всі поля.") }
      else {
        toast.error("Невідома помилка. Повторіть спробу.")
      }
      console.error("Error adding product", error);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  // Закрытие модального окна
  const closeModal = () => {
    setIsModalOpen(false);
    setRodData({
      render: false,
      purpose: "",
      price: "",
      stock: 0,

      discount: "",
      sale: false,
      salePriceMain: "",
      code: "",
      description: [{ text: "" }],
      typerods: "",
      name: "",
      brand: "",
      series: "",
      model: "",
      item: "",
      testMin: "",
      testMax: "",
      testLb: "",
      rodSize: "",
      transSize: "",
      weight: "",
      action: "",
      rodClass: "",
      design: "",
      section: "",
      guideType: "",
      country: "",
      alt: "",
    });
    setImages([]);
    setImagePreviews([]);
  };

  const openPreviewModal = () => {
    setIsPreviewModalOpen(true);
  };

  // Функция закрытия модального окна для предпросмотра
  const closePreviewModal = () => {
    setIsPreviewModalOpen(false);
  };

  return (
    <>
      <AddProductButton onClick={openModal} />
      {isModalOpen && (
        <AddProductModal onClose={closeModal} isOpen={isModalOpen}>
          <AddRodForm
            onSubmit={(e) => {
              e.preventDefault();
              openPreviewModal();
            }}
            handleChange={handleChange}
            rodData={rodData}
            handleImageChange={handleImageChange}
            handleDescriptionChange={handleDescriptionChange}
            removeDescriptionParagraph={removeDescriptionParagraph}
            addDescriptionParagraph={addDescriptionParagraph}
            imagePreviews={imagePreviews}
          />
        </AddProductModal>
      )}

      {isPreviewModalOpen && (
        <AddProductModal onClose={closePreviewModal} isOpen={isPreviewModalOpen}>
          <AddRodPreview
            onClick={() => {
              closePreviewModal();
              setIsModalOpen(true);
            }}
            rodData={rodData}
            imagePreviews={imagePreviews}
            handleSubmit={handleSubmit}
          />
        </AddProductModal>
      )}
    </>
  );
};

export default AddRod;


