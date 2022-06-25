import { useState, createContext } from "react";

export const Context = createContext();
export const ContextProvider = ({ children }) => {
  const [updateImages, setUpdateImages] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Context.Provider
      value={{ updateImages, setUpdateImages, searchQuery, setSearchQuery }}
    >
      {children}
    </Context.Provider>
  );
};
