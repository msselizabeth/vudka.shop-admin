"use client";
import React, { useState, useEffect, useContext } from "react";
import styles from "./RatesList.module.css";
import UpdateInput from "../Exchange/UpdateInput";
import ToChangeButton from "../Exchange/ToChangeButton";
import InnerLoad from "../InnerLoad/InnerLoad";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileInvoiceDollar } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Импортируем контекст
import { RateContext } from "../context/RateContext";

const RatesList = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempRate, setTempRate] = useState("");
  const { rate, updateRate, isLoading, error } = useContext(RateContext);

  // Устанавливаем курс в качестве начального значения для tempRate
  useEffect(() => {
    if (rate) {
      setTempRate(rate.toString());
    }
  }, [rate]);

  // Функция для сохранения обновленного курса
  const saveRate = async () => {
    try {
      await updateRate(tempRate);
      setIsEditing(false);
      toast.success("Курс оновлено успішно.");
    } catch (error) {
      toast.error("Помилка при оновленні курса.");
      console.error("Помилка:", error);
    }
  };

  // Обработчик изменения значения в поле ввода
  const handleInputChange = (e) => {
    setTempRate(e.target.value);
  };

  return (
    <div className={styles.ratesContainer}>
      <p className={styles.ratesIcon}>
        <FontAwesomeIcon icon={faFileInvoiceDollar} />
      </p>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {isLoading ? (
        <InnerLoad size={25} color={"#03464F"} text={"Завантаження курса..."} />
      ) : (
        <div className={styles.ratesList}>
          {isEditing ? (
            <UpdateInput
              value={tempRate}
              onChange={handleInputChange}
              disabled={isLoading}
              saveRate={saveRate}
              setEditTarget={() => setIsEditing(false)}
            />
          ) : (
            <div className={styles.rate}>
              <span className={styles.rateValue}>{rate} грн/1$</span>
              <ToChangeButton onClick={() => setIsEditing(true)} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default RatesList;
