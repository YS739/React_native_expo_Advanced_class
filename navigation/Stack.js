import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = () => {
  const Stack = createNativeStackNavigator();

  const One = ({ navigation: { navigate } }) => {
    return (
      <TouchableOpacity onPress={() => navigate("two")}>
        <Text>One</Text>
      </TouchableOpacity>
    );
  };

  const Two = ({ navigation: { navigate, setOptions } }) => {
    return (
      <>
        <TouchableOpacity onPress={() => navigate("three")}>
          <Text>Two</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            setOptions({
              title: "제목 바꾸기",
            })
          }
        >
          <Text>Set Options</Text>
        </TouchableOpacity>
      </>
    );
  };

  const Three = ({ navigation: { goBack, reset } }) => {
    return (
      <>
        <TouchableOpacity onPress={() => goBack()}>
          <Text>Three</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            reset({
              index: 2,
              routes: [{ name: "three" }, { name: "one" }, { name: "two" }],
            })
          }
        >
          <Text>Reset Navigation</Text>
        </TouchableOpacity>
      </>
    );
  };

  return (
    <Stack.Navigator
      initialRouteName="one"
      screenOptions={{
        headerTintColor: "purple",
        headerBackTitle: "뒤로",
      }}
    >
      <Stack.Screen name="one" component={One} />
      <Stack.Screen name="two" component={Two} />
      <Stack.Screen
        options={{
          presentation: "modal",
        }}
        name="three"
        component={Three}
      />
    </Stack.Navigator>
  );
};

export default Stack;
