"use client"

import axios from "axios";


export const login = async (name, password) => {
  
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/admin-auth/login`, { name, password });
      localStorage.setItem('token', response.data.token);
      return response.data;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
};
  