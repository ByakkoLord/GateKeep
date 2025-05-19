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
  return (
    <Pressable
        onPress={action}

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
