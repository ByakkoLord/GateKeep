import { View, Text, Pressable, Image } from "react-native";
import { useRouter } from "expo-router";
import { useContext } from "react";
import LRInputButton from "@/components/LRInputButton";
import { ButtonsContext } from "@/contexts/buttonsContext";

export default function Cadastro() {
  const { activate, setActivate, inputText } = useContext(ButtonsContext)!;
  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
      <Text
        style={{
          fontSize: 60,
          fontFamily: "Geologica_400Regular",
          margin: 40,
          marginTop: 80,
        }}
      >
        Registrar-se
      </Text>
      <View
        style={{
          marginTop: 100,
          display: "flex",
          width: "100%",
          alignItems: "center",
          gap: 15,
        }}
      >
        <LRInputButton
          usernamed={false}
          applyCondition={false}
          showInput={true}
          placeHolder="Nome de Usuário"
        ></LRInputButton>
        <Text
          style={{
            color: "#878787",
            width: "80%",
            borderLeftColor: "#878787",
            borderLeftWidth: 4,
            fontSize: 20,
            paddingLeft: 20,
            fontFamily: "Geologica_400Regular",
          }}
        >
          Escolha seu Nome que será mostrado aos outros usuários
        </Text>
        <View
          style={{
            display: "flex",
            marginTop: 30,
            width: "100%",
            alignItems: "center",
            gap: 15,
          }}
        >
          <LRInputButton
            usernamed={false}
            passworded={false}
            applyCondition={true}
            showInput={true}
            placeHolder="Senha"
          ></LRInputButton>
          <Text
            style={{
              color: "#878787",
              width: "80%",
              borderLeftColor: "#878787",
              borderLeftWidth: 4,
              fontSize: 20,
              paddingLeft: 20,
              fontFamily: "Geologica_400Regular",
            }}
          >
            Use no mínimo 8 Caracteres para criar sua senha
          </Text>
        </View>
        <LRInputButton
          usernamed={false}
          passworded={false}
          applyCondition={false}
          showInput={activate}
          placeHolder="Repita a senha"
        ></LRInputButton>
        <Pressable
          style={{
            display: "flex",
            flexDirection: "row",
            marginTop: 30,
            marginBottom: 30,
            width: 220,
            paddingRight: 10,
            paddingLeft: 10,
            height: 60,
            backgroundColor: "#E9E9E9",
            borderRadius: 12,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "black",
              width: "80%",
              borderLeftColor: "#878787",
              fontSize: 30,
              paddingLeft: 20,
              marginLeft: 40,
              fontFamily: "Geologica_400Regular",
            }}
          >
            Continuar
          </Text>
          <Image
            style={{ marginLeft: 2, width: 40, height: 40, marginRight: 50 }}
            source={require("../assets/images/right.png")}
          />
        </Pressable>
      </View>
    </View>
  );
}
