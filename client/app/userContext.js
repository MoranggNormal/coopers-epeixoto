"use client";

import { createContext, useState, useContext, useEffect } from "react";
import { deleteSession } from "./actions";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ userData, children }) => {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = async () => {
    await deleteSession();
    setUser(null);
  };

  useEffect(() => {
    if (userData) {
      login(userData);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
