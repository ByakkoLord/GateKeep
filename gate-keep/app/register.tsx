import { ButtonsContext } from "@/contexts/buttonsContext";
import { useRouter } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { Image, Pressable, Text, TextInput, View } from "react-native";
import ErrorBox from "@/components/ErrorBox";

export default function Cadastro() {
  const { activate, setActivate, inputText } = useContext(ButtonsContext)!;
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");
  const [displayConfirm, setDisplayConfirm] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (
      userPassword.length >= 8 &&
      passwordRepeat.length >= 8 &&
      userPassword === passwordRepeat
    ) {
      console.log("As senhas coincidem");
      setDisplayConfirm(true);
    } else {
      console.log("As senhas não coincidem");
      setDisplayConfirm(false);
    }
  }, [userPassword, passwordRepeat]);

  // Função para criar o usuário

  async function createUser() {
    try {
      console.log("Sending new User");
      console.log("E-mail: " + userEmail, "Password: " + inputText);
      const resposta = await fetch("http://192.168.0.239:3000/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userEmail: userEmail,
          userPassword: userPassword,
          userName: "Pedrtraub Masntoan",
          birthDate: "2003-10-26",
          userCpf: "4811544404",
          phoneNumber: "11977722777",
        }),
      });

      console.log("Resposta da API:", await resposta.json());
      if (resposta.status === 200) {
        console.log("Usuário criado com sucesso!");
        router.push("/");
      } else {
        console.log("Erro ao criar usuário:", resposta.status);
      }
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      console.log("userPassword", userPassword);
      console.log("passwordRepeat", passwordRepeat);
    }
  }

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
        <TextInput
          value={userEmail}
          onChangeText={(text) => {
            setUserEmail(text);
          }}
          placeholder={"Nome de Usuário"}
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
        ></TextInput>
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
          <TextInput
            placeholder={"Senha"}
            onChange={(text) => {
              setActivate(false);
              setUserPassword(text.nativeEvent.text);
              if (text.nativeEvent.text.length >= 8) {
                setActivate(true);
              }
            }}
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
          ></TextInput>
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
        <TextInput
          value={passwordRepeat}
          onChangeText={(text) => setPasswordRepeat(text)}
          placeholder={"Repita sua Senha"}
          style={{
            display: activate ? "flex" : "none",
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
        ></TextInput>
        
        <Pressable
          onPress={() => {
            createUser();
            if (userPassword === passwordRepeat) {
              console.log("As senhas coincidem");
              createUser();
            } else {
              console.log("As senhas não coincidem");
            }
          }}
          style={{
            display: displayConfirm ? "flex" : "none",
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
      <ErrorBox
          errorMessage={"As senhas não coincidem"}
          showError={userPassword !== passwordRepeat}
        />
    </View>
  );
}
