import { ButtonsContext } from "@/contexts/buttonsContext";
import React, { useContext } from "react";
import { Image, ImageSourcePropType, Pressable } from "react-native";

type LoginButtonProps = {
  image: ImageSourcePropType;
  action: any;
};

export default function LoginButtons({ image, action }: LoginButtonProps) {
  ("");
  const { userEmail, setUserEmail, password, setPassword } =
    useContext(ButtonsContext)!;
  async function consumirAPI() {
    try {
      console.log("Consumindo API");
      console.log("E-mail: " + userEmail, "Password: " + password);

      const resposta = await fetch("http://192.168.0.239:3000/auth-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userEmail: userEmail,
          userPassword: password,
        }),
      });
      console.log("Resposta da API:", await resposta.json());
      if (!resposta.ok) {
        console.log("Resposta não OK:", resposta.status);
        throw new Error("Erro ao consumir a API");
      }

      const dados = await resposta.json();
      console.log(dados);
    } catch (error) {
      console.error("Erro no fetch:", error);
    }
  }
  return (
    <Pressable
      onPress={() => {
        console.log("Try Login");
        consumirAPI(), setPassword(""), setUserEmail("");
      }}
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
