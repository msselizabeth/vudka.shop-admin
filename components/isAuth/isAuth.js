"use client";

import { checkAuth } from "@/middlewares/auth";
import { useEffect, useState } from "react";
import AppLayout from "../AppLayout/AppLayout";
import Login from "../Login/Login";

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

      return <div>Loading...</div>; // или загрузочный спиннер
    }
  
    return (
        <>{isAuthenticated ? <AppLayout>{children}</AppLayout> : <Login/> }</>
    );
}

export default IsAuth; 