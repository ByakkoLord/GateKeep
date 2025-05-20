import { View, Text, Pressable } from "react-native";
import LRInputButton from "@/components/LRInputButton";

export default function Cadastro() {
  return (
    <View style={{ flex: 1 }}>
      <Text
        style={{ fontSize: 60, fontFamily: "Geologica_400Regular", margin: 40, marginTop: 80 }}
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
        <LRInputButton showInput={true} placeHolder="Nome de Usuário"></LRInputButton>
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
          <LRInputButton showInput={true} placeHolder="Senha"></LRInputButton>
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
        <LRInputButton showInput={false} placeHolder="Repita a senha"></LRInputButton>
      </View>
    </View>
  );
}
