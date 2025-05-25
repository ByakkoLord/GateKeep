import React from "react";
import { Image, Text, View } from "react-native";

type ErrorBoxProps = {
  errorMessage: string;
  showError: boolean;
};

export default function ErrorBox({ errorMessage, showError }: ErrorBoxProps) {
  return (
    <View
      style={{
        display: showError ? "flex" : "none",
        flexDirection: "row",
        
        alignItems: "center",
        bottom: 50,
        width: "90%",
        margin: "auto",
        height: 50,
        maxWidth: 700,
        backgroundColor: "#F92020",
        padding: 10,
        borderRadius: 10,
        marginBottom: 10,
      }}
    >
      <Image
        style={{ width: 30, height: 30, marginRight: 10 }}
        source={require("@/assets/images/warning.png")}
      />
      <Text
        style={{
          color: "#FFFFFF",
          fontFamily: "Geologica_400Regular",
          fontSize: 20,
        }}
      >
        {errorMessage}
      </Text>
    </View>
  );
}
