"use client";
import { login } from "@/middlewares/login";
import { useState } from "react";
import styles from "./Login.module.css";
import Image from "next/image";

const Login = () => {
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get("username");
    const password = formData.get("password");

    try {
      await login(username, password);
      window.location.reload();
    } catch (error) {
      setError("Невірний пароль або імʼя.");
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.upContainer}>
        <div className={styles.logoContainer}>
          <Image
            src="/vudka-logo.svg"
            alt="vudka.shop"
            width={300}
            height={300}
            className={styles.imageLogo}
          />
          <p className={styles.logoText}>Вудка.шоп</p>
        </div>
        <p>Управління сайтом</p>
      </div>
      <div className={styles.loginInnerContainer}>
        <h3 className={styles.loginTitle}>Авторизація</h3>
        <form onSubmit={handleSubmit} className={styles.loginForm}>
          <input type="text" name="username" placeholder="Імʼя" />
          <input type="password" name="password" placeholder="Пароль" />
          {error && <p className={styles.error}>{error}</p>}
          <button type="submit">Увійти</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
