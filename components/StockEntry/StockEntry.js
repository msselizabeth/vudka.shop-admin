"use client";
import { useState } from "react";

import axios from "axios";
import Modal from "../Modal/ModalStockEntry";
import styles from "./StockEntry.module.css";
import ModalStockEntry from "../Modal/ModalStockEntry";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSquarePlus, faTrashCan } from "@fortawesome/free-solid-svg-icons";

const StockEntryForm = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddDocument = () => {
    setIsFormVisible(!isFormVisible);
  };

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  const handleRemoveProduct = (index) => {
    const updatedProducts = [...products];
    updatedProducts.splice(index, 1);
    setProducts(updatedProducts);
  };

  const handleSubmitDocument = async () => {
    const sanitizedProducts = products.map(({ productName, ...rest }) => rest);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/stock-entry`,
        { products: sanitizedProducts }
      );
    
      setProducts([]);
      setIsFormVisible(false);
    } catch (error) {
      console.error("Помилка:", error);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.stockEntryContainer}>
      
      <button
        onClick={handleAddDocument}
        className={`${
          isFormVisible ? styles.closedDocumentBtn : styles.openedDocumentBtn
        } ${styles.documentBtn}`}
      >
        {isFormVisible
          ? "Закрити створення документа"
          : "Відкрити створення документа"}
      </button>


      {isFormVisible && (
        <>

          <table className={styles.table}
            
          >
            <thead className={styles.thead}>
              <tr className={styles.tableHeaderLine}>
              <th className={styles.tableHeader}>№</th>
                <th className={styles.tableHeader}>Назва товара</th>
                <th className={styles.tableHeader}>Кількість(шт)</th>
                <th className={styles.tableHeader}>Цена($)</th>
                <th className={styles.tableHeader}>Доступні дії</th>
              </tr>
            </thead>
            <tbody className={styles.tbody}>
              {products.map((product, index) => (
                <tr key={index} >
                  <td className={styles.productOrderNum}>{index + 1}</td>
                  <td className={styles.productName}>{product.productName}</td>
                  <td className={styles.productItem}>{product.quantity}</td>
                  <td className={styles.productItem}>{product.price}</td>
                  <td className={styles.productItem}>
                    <button onClick={() => handleRemoveProduct(index)} className={styles.deleteProdBtn}>
                    <FontAwesomeIcon icon={faTrashCan} />
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td colSpan="4"  className={styles.addItem}>
                  <button onClick={openModal} className={styles.addProdBtn}> <FontAwesomeIcon icon={faSquarePlus} className={styles.addProdBtnIcon}/>Додати</button>
                </td>
              </tr>
            </tbody>
          </table>

          {products.length > 0 && (
            <div style={{ marginTop: "20px" }}>
              <button
                onClick={handleSubmitDocument}
                className={styles.submitButton}
              >
                Зберігти документ
              </button>
            </div>
          )}
        </>
      )}

      <ModalStockEntry
        isOpen={isModalOpen}
        onClose={closeModal}
        onAddProduct={handleAddProduct}
      />
    </div>
  );
};

export default StockEntryForm;
