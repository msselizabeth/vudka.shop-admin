"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./ModalStockEntry.module.css";
import InnerLoad from "../InnerLoad/InnerLoad";

const ModalStockEntry = ({ isOpen, onClose, onAddProduct }) => {
  const collections = ["reels", "rods", "hooks", "siliconelures"];
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    if (selectedCollection) {
      const fetchProducts = async () => {
        try {
          const response = await axios.get(
            `${process.env.NEXT_PUBLIC_API_URL}/products?collectionName=${selectedCollection}&search=${searchQuery}`
          );
          setProducts(response.data.products);
        } catch (error) {
          console.error("Error fetching products:", error);
        }finally {
          setIsLoading(false);
        }
      };

      fetchProducts();
    }
  }, [selectedCollection, searchQuery]);

  const handleAdd = () => {
    if (selectedProduct && quantity) {
      onAddProduct({
        collectionName: selectedCollection,
        productId: selectedProduct._id,
        productName: `${selectedProduct.name} ${selectedProduct.brand} ${selectedProduct.series} ${selectedProduct.model}`,
        quantity,
        price: price || selectedProduct.price,
      });

    resetModal();
      onClose();
    }
  };

  const resetModal = () => {
    setSelectedCollection(null);
    setProducts([]);
    setSearchQuery('');
    setSelectedProduct(null);
    setQuantity(1);
    setPrice('');
  };

  const handleClose = () => {
    resetModal();
    onClose(); // Закрываем модальное окно
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <h2>Додати товар</h2>

        {!selectedCollection && (
          <div className={styles.formGroup}>
            <select
              onChange={(e) => setSelectedCollection(e.target.value)}
              className={styles.input}
            >
              <option value="">--Оберіть колекцію--</option>
              {collections.map((collection) => (
                <option key={collection} value={collection}>
                  {collection}
                </option>
              ))}
            </select>
          </div>
        )}

        {selectedCollection && (
          <>
            <div className={styles.formGroup}>
              <label>Поиск товара:</label>
              <input
                type="text"
                placeholder="Введите название товара"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={styles.input}
              />
            </div>

            {isLoading ? (
              <InnerLoad
                size={50}
                color={"#03464F"}
                text={"Зачекайте відповіді сервера."}
              />
            ) : (
              <div className={styles.productList}>
                {products.map((product) => (
                  <div
                    key={product._id}
                    className={styles.productItem}
                    onClick={() => {
                      setSelectedProduct(product);
                      setPrice(product.priceMain);
                    }}
                  >
                    {`${product.name} ${product.brand} ${product.series} ${product.model}`}
                  </div>
                ))}
              </div>
            )}

            {selectedProduct && (
              <>
                <div className={styles.formGroup}>
                  <label>Кількість:</label>
                  <input
                    type="number"
                    value={quantity}
                    min="1"
                    onChange={(e) => setQuantity(e.target.value)}
                    className={styles.input}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Ціна($):</label>
                  <input
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className={styles.input}
                    
                  />
                </div>
                <div className={styles.buttons}>
                  <button onClick={handleAdd} className={styles.button}>
                    Додати
                  </button>
                </div>
              </>
            )}
          </>
        )}

        <button onClick={handleClose} className={styles.closeButton}>
          Відмінити
        </button>
      </div>
    </div>
  );
};

export default ModalStockEntry;
