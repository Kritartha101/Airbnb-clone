import { View, Text, ImageBackground } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
const Header = () => {
  const navigation = useNavigation();
  return (
    <View>
    
      <ImageBackground
        source={{
          uri: "https://wallpapersmug.com/download/1280x900/3126d4/outing-campfire-tent-night.jpg",
        }}
      ></ImageBackground>
    </View>
  );
};
export default Header;
