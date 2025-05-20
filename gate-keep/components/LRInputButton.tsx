import { TextInput } from "react-native";
import { useState, createContext } from "react";

type LRInputButtonProps = {
    placeHolder: string
    showInput: boolean
}

export default function LRInputButton({placeHolder, showInput} :LRInputButtonProps) {

  const [inputText, setInputText] = useState<string>("")

  return (
    <TextInput 
    value={inputText}
    onChangeText={setInputText}
      style={{display: showInput ? "flex" : "none",
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
