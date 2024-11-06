"use client";

import React, { useState } from "react";
import axios from "axios";

export const DetectIngredient: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [alert, setAlert] = useState(false);
  const [result, setResult] = useState(null);

  const apiUrl = "";

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFile(event.target.files[0]);
    }
  };

  const handleFileUpload = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!file) {
      setAlert(true);
      return;
    }
    setAlert(false);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(`${apiUrl}/upload`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
        },
      });
      setResult(response.data);
    } catch (error) {
      setAlert(true);
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleFileUpload}>
      <input type="file" onChange={handleFileChange} accept="image/*"></input>
      <button type="submit">Analyze</button>
    </form>
  );
};
