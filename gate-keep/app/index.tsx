import { Text, View, TextInput, Pressable, Image } from "react-native";

export default function Index() {
  return (
    <View style={{ display: "flex", flex: 1 }}>
      <Text
        style={{ fontSize: 60, fontFamily: "Geologica_400Regular", margin: 40 }}
      >
        Login
      </Text>
      <View style={{ marginTop: 150 }}>
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
          placeholder="Nome de Usuário"
        ></TextInput>
        <TextInput
          style={{
            fontSize: 30,
            fontFamily: "Geologica_400Regular",
            backgroundColor: "#E9E9E9",
            borderRadius: 12,
            width: "90%",
            margin: "auto",
            marginTop: 15,
            paddingLeft: 30,
            paddingTop: 15,
            paddingBottom: 15,
          }}
          placeholder="Senha"
        ></TextInput>
      </View>
      <Pressable>
        <Text
          style={{
            fontFamily: "Geologica_400Regular",
            margin: "auto",
            fontSize: 17,
            marginTop: 15,
            color: "#3D3D3D" 
          }}
        >
          Esqueceu sua Senha?
        </Text>
      </Pressable>
      <View
        style={{
          display: "flex",
          gap: "15",
          flexDirection: "row",
          margin: "auto",
          marginTop: 70,
        }}
      >
        <Pressable
          style={{
            width: 80,
            height: 70,
            backgroundColor: "#D9D9D9",
            borderRadius: 12,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{ width: 50, height: 50 }}
            source={require("../assets/images/google-icon.png")}
          ></Image>
        </Pressable>
        <Pressable
          style={{
            width: 80,
            height: 70,
            backgroundColor: "#D9D9D9",
            borderRadius: 12,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{ width: 50, height: 50 }}
            source={require("../assets/images/facebook.png")}
          ></Image>
        </Pressable>
        <Pressable
          style={{
            width: 80,
            height: 70,
            backgroundColor: "#D9D9D9",
            borderRadius: 12,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            style={{ width: 50, height: 50 }}
            source={require("../assets/images/right.png")}
          ></Image>
        </Pressable>
      </View>
      <Pressable style={{ justifyContent: "flex-end", alignItems: "center", marginBottom: 15 }}>
        <Text style={{ fontFamily: "Geologica_400Regular", color: "#3D3D3D" }}>
          Ainda não tem uma conta?
        </Text>
      </Pressable>
    </View>
  );
}
