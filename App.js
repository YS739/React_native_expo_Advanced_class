import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import Stack from "./navigation/Stack";
import Tabs from "./navigation/Tabs";

export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack /> */}
      <Tabs />
    </NavigationContainer>
  );
}
