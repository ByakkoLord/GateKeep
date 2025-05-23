import React, { useState, createContext } from "react";
export const ButtonsContext = createContext<{
  activate: boolean;
  setActivate: React.Dispatch<React.SetStateAction<boolean>>;
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
  userEmail: string;
  setUserEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
} | null>(null);

export const ButtonsContextProvider = ({ children }: any) => {
  const [activate, setActivate] = useState(false);
  const [inputText, setInputText] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <ButtonsContext.Provider
      value={{
        activate,
        setActivate,
        inputText,
        setInputText,
        userEmail,
        setUserEmail,
        password,
        setPassword,
      }}
    >
      {children}
    </ButtonsContext.Provider>
  );
};
