import { TextInput, View } from "react-native";

type BarProps = {
    registerPhase: string,
    registerPhase1: string,
    registerPhase2: string,
}

export default function Bar({registerPhase, registerPhase1, registerPhase2}: BarProps ) {
    
  return (
    <View
      style={{
        width: 150,
        height: 50,
        backgroundColor: "#D9D9D9",
        position: "absolute",
        bottom: 50,
        borderRadius: 33,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <View
        style={{
          borderRadius: "50%",
          width: 30,
          height: 30,
          backgroundColor: registerPhase,
        }}
      ></View>
      <View
        style={{
          borderRadius: "50%",
          backgroundColor: registerPhase1,
          width: 30,
          height: 30,
        }}
      ></View>
      <View
        style={{
          borderRadius: "50%",
          backgroundColor: registerPhase2,
          width: 30,
          height: 30,
        }}
      ></View>
    </View>
  );
}
