import { TextInput } from "react-native";

type LRInputButtonProps = {
    placeHolder: string
}

export default function LRInputButton({placeHolder} :LRInputButtonProps) {
  return (
    <TextInput
      style={{
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
