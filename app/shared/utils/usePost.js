"use client";
import axios from "axios";
import { useState } from "react";

export const usePost = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handlePost = async (formData) => {
    setIsLoading(true);
    setError(null);
    try {
      const { data } = await axios.post(process.env.API_URL, {
        formData
      });
      if (data) {
        return true;
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, error, handlePost };
};
