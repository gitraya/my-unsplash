import { useState, createContext } from "react";

export const Context = createContext();
export const ContextProvider = ({ children }) => {
  const [updateImages, setUpdateImages] = useState(null);

  return (
    <Context.Provider value={{ updateImages, setUpdateImages }}>
      {children}
    </Context.Provider>
  );
};
