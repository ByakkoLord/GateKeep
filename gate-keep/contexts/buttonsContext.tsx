import React, { useState, createContext } from "react";
export const ButtonsContext = createContext<{
  activate: boolean;
  setActivate: React.Dispatch<React.SetStateAction<boolean>>;
} | null>(null);

export const ButtonsContextProvider = ({ children }: any) => {
  const [activate, setActivate] = useState(false);

  return (
    <ButtonsContext.Provider value={{ activate, setActivate }}>
      {children}
    </ButtonsContext.Provider>
  );
};
