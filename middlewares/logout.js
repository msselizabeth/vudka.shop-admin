"use client"
import axios from "axios";

export const logout = async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/admin-auth/logout`, {}, {
          headers: { Authorization: `Bearer ${token}` },
        });
        localStorage.removeItem('token');
      } catch (error) {
        console.error('Logout error:', error);
      }
    }
  };