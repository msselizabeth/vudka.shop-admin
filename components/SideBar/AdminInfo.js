"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./AdminInfo.module.css";
import {
  faRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import { faIdCard } from "@fortawesome/free-regular-svg-icons";
import { logout } from "@/middlewares/logout";
import { checkAuth } from "@/middlewares/auth";
import { useEffect, useState } from "react";

const AdminInfo = () => {
  const [currentAdmin, setCurrentAdmin] = useState("");

  const handleLogout = async () => {
    await logout();
    window.location.reload(); 
  };

  useEffect(() => {
    const verifyAuth = async () => {
      const admin = await checkAuth();
      setCurrentAdmin(admin);
    };
    verifyAuth();
  }, []);

  return (
    <div className={styles.adminInfoContainer}>
      <div className={styles.currentAdmin}>
              <FontAwesomeIcon icon={faIdCard} />
        <p>{currentAdmin.name}</p>    
        {/* <p>{currentAdmin.role}</p>   */}
      </div>
      <div className={styles.logoutBtnContainer}>
        <button className={styles.logoutBtn} onClick={handleLogout}>
          <FontAwesomeIcon icon={faRightToBracket} />
        </button>
      </div>
    </div>
  );
};

export default AdminInfo;
