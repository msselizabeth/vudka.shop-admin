"use client";
import { useState, useEffect } from "react";
import axios from "axios";

import styles from "./RatesList.module.css";
import UpdateInput from "../Exchange/UpdateInput";
import ToChangeButton from "../Exchange/ToChangeButton";
import InnerLoad from "../InnerLoad/InnerLoad";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileInvoiceDollar } from "@fortawesome/free-solid-svg-icons";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RatesList = () => {
  const [mainRate, setMainRate] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [editTarget, setEditTarget] = useState(null);
  const [tempRate, setTempRate] = useState(0);
  const token = localStorage.getItem("token");

  // Function to fetch the main rate from the server
  const fetchMainRate = async () => {
    try {
      setIsLoading(true);
      setError(null);

      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/exchange`,
        {
          params: {
            target: "main",
          },
        }
      );
        setMainRate(response.data.exchange.value);
        
    } catch (error) {
      setError("Не вдалося завантажити поточний курс.");
        toast.error("Не вдалося завантажити поточний курс.");
        console.error("Помилка:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMainRate();
  }, []);

  // Function to save the updated rate
  const saveRate = async () => {

    try {
      setIsLoading(true);
      setError(null);

      await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/exchange`,
        { target: "main", value: tempRate },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      setEditTarget(null);
      toast.success("Курс оновлено успішно.");
      fetchMainRate();
    } catch (error) {
        setError("Не вдалось зберегти курс");
        toast.error("Помилка при оновленні курсу.");
      console.error("Помилка:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setTempRate(e.target.value);
  };

  const startEditing = (target, currentValue) => {
    setEditTarget(target);
    setTempRate(currentValue.toString());
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
          {editTarget === "main" ? (
            <UpdateInput
              value={tempRate}
              onChange={handleInputChange}
              disabled={isLoading}
              saveRate={saveRate}
              setEditTarget={setEditTarget}
            />
          ) : (
            <div className={styles.rate}>
              <span className={styles.rateValue}>{mainRate} грн/1$</span>
              <ToChangeButton onClick={() => startEditing("main", mainRate)} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default RatesList;
