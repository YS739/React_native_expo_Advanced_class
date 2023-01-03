import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const One = ({ navigation: { navigate } }) => {
  return (
    <TouchableOpacity onPress={() => navigate("two")}>
      <Text>One</Text>
    </TouchableOpacity>
  );
};

const Two = ({ navigation: { navigate } }) => {
  return (
    <TouchableOpacity onPress={() => navigate("three")}>
      <Text>Two</Text>
    </TouchableOpacity>
  );
};

const Three = ({ navigation: { goBack } }) => {
  return (
    <TouchableOpacity onPress={() => goBack()}>
      <Text>Three</Text>
    </TouchableOpacity>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="one" component={One} />
        <Stack.Screen name="two" component={Two} />
        <Stack.Screen name="three" component={Three} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
