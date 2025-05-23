import { TextInput } from "react-native";
import { useState, useContext, useEffect } from "react";
import { ButtonsContext } from "@/contexts/buttonsContext";

type LRInputButtonProps = {
  placeHolder: string;
  showInput: boolean;
  applyCondition: boolean;
  usernamed: boolean;
  passworded?: boolean;
};

export default function LRInputButton({
  placeHolder,
  showInput,
  applyCondition,
  usernamed,
  passworded,
}: LRInputButtonProps) {
  const {
    activate,
    setActivate,
    inputText,
    setInputText,
    userEmail,
    setUserEmail,
    password,
    setPassword,
  } = useContext(ButtonsContext)!;

  useEffect(() => {
    if (applyCondition) {
      console.log("Apply condition is true");
      if (inputText.length >= 8) {
        console.log("Apply?" + applyCondition);
        setActivate(true);
        console.log("Input is valid");
        console.log(inputText);
        console.log(activate);
      } else {
        setActivate(false);
      }
    }
  }, [inputText, applyCondition]);

  return (
    <TextInput
      value={usernamed ? userEmail : password}
      onChangeText={(text) => {
        if (usernamed) setUserEmail(text), console.log(text);
        if (passworded) setPassword(text), console.log(text);
      }}
      style={{
        display: showInput ? "flex" : "none",
        fontSize: 30,
        fontFamily: "Geologica_400Regular",
        backgroundColor: "#E9E9E9",
        borderRadius: 12,
        width: "90%",
        margin: "auto",
        paddingLeft: 30,
        paddingTop: 15,
        paddingBottom: 15,
      }}
      placeholder={placeHolder}
    ></TextInput>
  );
}
