import { Text, View, TextInput, Pressable, Image, ImageSourcePropType } from "react-native";


type LoginButtonProps = {
  image: ImageSourcePropType;
};

export default function LoginButtons({image}: LoginButtonProps) {
  return (
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
      <Image style={{ width: 50, height: 50 }} source={image}></Image>
    </Pressable>
  );
}
