"use client"
import React, { createContext, useState, useEffect, useCallback } from "react";
import axios from "axios";

export const RateContext = createContext();

export const RateProvider = ({ children }) => {
  const [rate, setRate] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");

  const fetchRate = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/exchange`, {
        params: { target: "main" },
      });
      setRate(response.data.exchange.value);
    } catch (error) {
      setError("Не вдалось завантажити поточний курс.");
      console.error("Помилка при отриманні курса:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const updateRate = async (newRate) => {
    try {
      setIsLoading(true);
      setError(null);
      await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/exchange`,
        { target: "main", value: newRate },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setRate(newRate); // Обновляем курс в локальном состоянии
    } catch (error) {
      setError("Не вдалось оновити курс.");
      console.error("Помилка при оновленні курса:", error);
      throw error; // Прокидываем ошибку для обработки в компоненте
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRate();
  }, [fetchRate]);

  return (
    <RateContext.Provider value={{ rate, updateRate, isLoading, error }}>
      {children}
    </RateContext.Provider>
  );
};
