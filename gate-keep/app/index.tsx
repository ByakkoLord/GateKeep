import { Text, View, TextInput, Pressable, Image } from "react-native";
import { useRouter } from "expo-router"
import LoginButtons from "@/components/LoginButtons";
import LRInputButton from "@/components/LRInputButton";
import { ButtonsContextProvider } from '@/contexts/buttonsContext';

export default function Index() {

  const router = useRouter()
  return (
      <View style={{ display: "flex", flex: 1 }}>
      <Text
        style={{ marginBottom: 20, marginTop: 80 ,fontSize: 60, fontFamily: "Geologica_400Regular", margin: 40 }}
      >
        Login
      </Text>
      <View style={{ marginTop: 150, gap: 20 }}>
        <LRInputButton usernamed={true} passworded={false} applyCondition={false} showInput={true} placeHolder="E-mail de Usuário"></LRInputButton>
        <LRInputButton usernamed={false} passworded={true} applyCondition={false} showInput={true} placeHolder="Senha"></LRInputButton>
      </View>
      <Pressable>
        <Text
          style={{
            fontFamily: "Geologica_400Regular",
            margin: "auto",
            fontSize: 17,
            marginTop: 15,
            color: "#3D3D3D",
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
        <LoginButtons
         action={null} image={require("../assets/images/google-icon.png")} />
        <LoginButtons action={null} image={require("../assets/images/facebook.png")} />
        <LoginButtons action={() => router.push("/interScreen")} image={require("../assets/images/right.png")} />
      </View>
      <Pressable
        onPress={() => {
          router.push("/interScreen");
        }}
        style={{
          justifyContent: "flex-end",
          alignItems: "center",
          marginBottom: 15,
        }}
      >
        <Text style={{ fontFamily: "Geologica_400Regular", color: "#3D3D3D" }}>
          Ainda não tem uma conta?
        </Text>
      </Pressable>
    </View>
    
  );
}
