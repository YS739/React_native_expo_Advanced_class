import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Movies({ navigation: { navigate } }) {
  return (
    <View>
      <Text> Movies </Text>
      <TouchableOpacity onPress={() => navigate("Stacks", { screen: "one" })}>
        <Text>Go to One Screen</Text>
      </TouchableOpacity>
    </View>
  );
}
