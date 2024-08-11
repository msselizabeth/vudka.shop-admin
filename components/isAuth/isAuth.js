"use client";

import { checkAuth } from "@/middlewares/auth";
import { useEffect, useState } from "react";
import AppLayout from "../AppLayout/AppLayout";
import Login from "../Login/Login";
import Loading from "../Loading/Loading";
import { RateProvider } from "../context/RateContext";

const IsAuth = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);

    useEffect(() => {
      const verifyAuth = async () => {
        const authStatus = await checkAuth();
        setIsAuthenticated(authStatus);
      };
      verifyAuth();
    }, []);
  
    if (isAuthenticated === null) {

      return <Loading size={150} color={"#F6F3BD"} />; // или загрузочный спиннер
    }
  
    return (
      <RateProvider>{isAuthenticated ? <AppLayout>{children}</AppLayout> : <Login  /> }</RateProvider>
    );
}

export default IsAuth; 