"use client";
import { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { toast } from "react-toastify";
import styles from "./PromotionToggle.module.css";
import RadioSelection from "./RadioSelection";
import SelectCollection from "./SelectCollection";


const PromotionToggle = () => {
  const [enablePromotion, setEnablePromotion] = useState(null);
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [selectedCollection, setSelectedCollection] = useState("Rod");
  const [selectedDiscount, setSelectedDicsount] = useState("3");
  const [errorMessage, setErrorMessage] = useState("");
  const [isOpenBody, setIsOpenBody] = useState(false);

  const token = localStorage.getItem("token");

  const handleRadioChange = (event) => {
    const value = event.target.value === "true";
    setEnablePromotion(value);
    setErrorMessage("");
    setIsOpenBody(true);
   
    if (!value) {
      setDateRange([null, null]);
    }
  };

  const handleSubmit = async () => {
    if (enablePromotion && (!startDate || !endDate)) {
      setErrorMessage(
        "Будь-ласка, оберіть дві дати. Для початку і для кінця."
      );
        toast.error("Будь-ласка, оберіть дві дати. Для початку і для кінця.")
      return;
    }

    try {
      await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/exchange/promotion-mode`,
        {
          enablePromotion,
          startDate: enablePromotion ? startDate.toISOString() : null,
          endDate: enablePromotion ? endDate.toISOString() : null,
          collection: selectedCollection,
          discount: selectedDiscount,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      toast.success(
        `Акцію для ${selectedCollection} ${
          enablePromotion ? "активовано" : "вимкнено"
        }.`
      );
      setIsOpenBody(false);
    } catch (error) {
      console.error("Помилка:", error);
      setErrorMessage(
        "Виникла невідома помилка при встанволенні режиму акцій."
      );
    }
  };

  return (
    <div className={styles.promotionControlContainer}>
      <p className={styles.promoTitle}>Управління режимом акцій(знижок):</p>
      <RadioSelection
        enablePromotion={enablePromotion}
        onChange={handleRadioChange}
      />

      <div className={styles.selectorsContainer}>
        {enablePromotion !== null && (
          <SelectCollection
            value={selectedCollection}
            onChange={(e) => setSelectedCollection(e.target.value)}
          />
        )}
        {enablePromotion && (
          <div className={styles.selectContainer}>
            <label>Знижка:</label>
            <select
              value={selectedDiscount}
              onChange={(e) => setSelectedDicsount(e.target.value)}
              className={styles.select}
            >
              <option value="3">3%</option>
              <option value="5">5%</option>
              <option value="7">7%</option>
              <option value="10">10%</option>
              <option value="15">15%</option>
              <option value="20">20%</option>
              <option value="25">25%</option>
              <option value="30">30%</option>
            </select>
          </div>
        )}
      </div>

      {enablePromotion && (
        <div className={styles.calendarContainer}>
          <DatePicker
            selected={startDate}
            onChange={(update) => setDateRange(update)}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            inline
            monthsShown={2}
            minDate={new Date()}
          />
        </div>
      )}

      <div className={styles.buttonContainer}>
        <button onClick={handleSubmit}>Застосувати</button>
      </div>

      {errorMessage && (
        <div style={{ color: "red", margin: "10px auto 0px auto", width: "220px", textAlign: "center" }}>{errorMessage}</div>
      )}
    </div>
  );
};

export default PromotionToggle;
