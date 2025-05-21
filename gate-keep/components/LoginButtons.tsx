import React, { useContext } from "react";
import { ButtonsContext } from "@/contexts/buttonsContext";
import {
  Text,
  View,
  TextInput,
  Pressable,
  Image,
  ImageSourcePropType,
} from "react-native";

type LoginButtonProps = {
  image: ImageSourcePropType;
  action: any;
};

export default function LoginButtons({ image, action }: LoginButtonProps) {

  const { username, setUsername, password, setPassword } = useContext(ButtonsContext)!;
  async function consumirAPI() {
    console.log("Consumindo API");
    console.log(username);
    console.log(password);
    const resposta = await fetch("http://192.168.0.138:3000/auth-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: username, password: password }),
    });
    console.log(resposta);

    if (!resposta.ok) {
      throw new Error("Erro ao consumir a API");
    }

    const dados = await resposta.json();
    console.log(dados);
  }
  

  return (
    <Pressable
      onPress={consumirAPI}
      style={({ pressed }) => [
        {
          width: 80,
          height: 70,
          backgroundColor: pressed ? "#8D8D8D" : "#D9D9D9",
          borderRadius: 12,
          justifyContent: "center",
          alignItems: "center",
        },
      ]}
    >
      <Image style={{ width: 50, height: 50 }} source={image}></Image>
    </Pressable>
  );
}
