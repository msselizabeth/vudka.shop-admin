"use client";
import { useState, useEffect } from "react";
import axios from "axios";

import styles from "./RatesList.module.css";
import UpdateInput from "../Exchange/UpdateInput";
import ToChangeButton from "../Exchange/ToChangeButton";
import InnerLoad from "../InnerLoad/InnerLoad";

const RatesList = () => {
  const [mainRate, setMainRate] = useState(0);
  const [saleRate, setSaleRate] = useState(0);
  const [promotionRate, setPromotionRate] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editTarget, setEditTarget] = useState(null); // Новое состояние для редактируемого курса
  const [tempRate, setTempRate] = useState(0);
  const token = localStorage.getItem("token");
  // Загрузка начальных данных с сервера

  const fetchRates = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const headers = {
        headers: { Authorization: `Bearer ${token}` },
      };

      const responseMainRate = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/exchange`,
        {
          params: {
            target: "main",
          },
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setMainRate(responseMainRate.data.exchange.value);

      const responseSaleRate = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/exchange`,
        {
          params: {
            target: "sale",
          },
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setSaleRate(responseSaleRate.data.exchange.value);

      const responsePromotionRate = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/exchange`,
        {
          params: {
            target: "promotion",
          },
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setPromotionRate(responsePromotionRate.data.exchange.value);
    } catch (error) {
      setError("Не вдалося завантажити поточні курси.");
      console.error("Помилка:", error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchRates();
  }, []);

  const saveRate = async () => {
    if (!token || editTarget === null) {
      setError("Токен аутентификации не найден или нет выбранного курса.");
      return;
    }

    try {
      setIsLoading(true);
      setError(null);

      const target = editTarget;

      // Отправка запроса на сервер для сохранения курса
      const response = await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/exchange`,
        { target, value: tempRate }, // Передаем данные в теле запроса
        { headers: { Authorization: `Bearer ${token}` } } // Передаем заголовок в запросе
      );

      setEditTarget(null);
      fetchRates();
    } catch (error) {
      setError("Не удалось сохранить курс");
      console.error("Ошибка сохранения курса:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Функция для обработки изменения ввода
  const handleInputChange = (e) => {
    setTempRate(e.target.value); // Сохраняем временное значение, позволяя полю быть пустым
  };

  // Функция для начала редактирования
  const startEditing = (target, currentValue) => {
    setEditTarget(target);
    setTempRate(currentValue.toString()); // Конвертируем текущее значение в строку
  };

  const renderRateItem = (target, rate, label) => (
    <>
      {editTarget === target ? (
        <UpdateInput
          value={tempRate}
          onChange={handleInputChange}
          disabled={isLoading}
          saveRate={saveRate}
          setEditTarget={setEditTarget}
        />
      ) : (
        <div>
          {label}: {rate}{" "}
          <ToChangeButton onClick={() => startEditing(target, rate)} />
        </div>
      )}
    </>
  );

  return (
    <div>
      <h4>Курси</h4>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {isLoading ? (
        <InnerLoad size={15} color={"#03464F"} text={"Завантаження курса..."} />
      ) : (
        <div className={styles.ratesList}>
          {renderRateItem("main", mainRate, "Основний")}
          {renderRateItem("sale", saleRate, "Розпродаж")}
          {renderRateItem("promotion", promotionRate, "Акція")}
        </div>
      )}
    </div>
  );
};

export default RatesList;
