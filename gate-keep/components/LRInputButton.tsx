import { TextInput } from "react-native";
import { useState, useContext, useEffect } from "react";
import { ButtonsContext } from "@/contexts/buttonsContext";

type LRInputButtonProps = {
  placeHolder: string;
  showInput: boolean | undefined;
};

export default function LRInputButton({
  placeHolder,
  showInput,
}: LRInputButtonProps) {
  const [inputText, setInputText] = useState<string>("");
  const {activate, setActivate} = useContext(ButtonsContext)!;

  useEffect(() => {
    if (inputText.length >= 8) {
      setActivate(true);
      console.log("Input is valid");
      console.log(inputText);
      console.log(activate);
    } else {
      setActivate(false);
    }
  }, [inputText]);

  return (
    <TextInput
      value={inputText}
      onChangeText={setInputText}
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
