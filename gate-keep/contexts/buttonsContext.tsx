import React, { useState, createContext } from "react";
export const ButtonsContext = createContext<{
  activate: boolean;
  setActivate: React.Dispatch<React.SetStateAction<boolean>>;
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
  username: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
} | null>(null);

export const ButtonsContextProvider = ({ children }: any) => {
  const [activate, setActivate] = useState(false);
  const [inputText, setInputText] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <ButtonsContext.Provider
      value={{
        activate,
        setActivate,
        inputText,
        setInputText,
        username,
        setUsername,
        password,
        setPassword,
      }}
    >
      {children}
    </ButtonsContext.Provider>
  );
};
