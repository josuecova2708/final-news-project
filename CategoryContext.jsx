"use client"
import React, { createContext, useState } from 'react';

// Crear el contexto
export const CategoryContext = createContext();

// Crear el proveedor del contexto
export const CategoryProvider = ({ children }) => {
  const [category, setCategory] = useState('general');
  const [lan, setLan] = useState("en")
  const [sour, setSour] = useState("")
  return (
    <CategoryContext.Provider value={{ category, setCategory, lan, setLan, sour, setSour }}>
      {children}
    </CategoryContext.Provider>
  );
};