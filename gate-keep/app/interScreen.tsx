import { View, Text } from "react-native";
import Bar from "@/components/Bar";
import { useRouter } from "expo-router";
import { useState, useEffect } from "react";

export default function interScreen() {
  const router = useRouter();

  let text: string = "V amos começar com o básico.  .  .   ";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;
      if (index >= text.length) clearInterval(interval), router.push("/register");;
    }, 100);
    
  }, [text]);

  return (
    <View
      style={{
        display: "flex",
        justifyContent: "center",
        flex: 1,
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontFamily: "Geologica_600SemiBold",
          fontSize: 40,
          width: "80%",
        }}
      >
        {displayedText}
      </Text>
      <Bar
        registerPhase="black"
        registerPhase1="white"
        registerPhase2="white"
      ></Bar>
    </View>
  );
}
