"use client";

import { checkAuth } from "@/middlewares/auth";
import { useEffect, useState } from "react";
import AppLayout from "../AppLayout/AppLayout";
import Login from "../Login/Login";
import Loading from "../Loading/Loading";

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
      <>{isAuthenticated ? <AppLayout>{children}</AppLayout> : <Login  /> }</>
    );
}

export default IsAuth; 