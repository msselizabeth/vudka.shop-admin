"use client"
import axios from "axios";

export const checkAuth = async () => {
    const token = localStorage.getItem('token');
    if (!token) return false;
  
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/admin-auth/current`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return response.data;
    } catch (error) {
      console.error('Auth check error:', error);
      return false;
    }
  };