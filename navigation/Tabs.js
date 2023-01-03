import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Movies from "../screen/Movies";
import My from "../screen/My";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useColorScheme } from "react-native";
import { GREEN_COLOR, PURPLE_COLOR, YELLOW_COLOR } from "../colors";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const isDark = useColorScheme() === "dark";

  return (
    <Tab.Navigator
      initialRouteName="my"
      sceneContainerStyle={{
        backgroundColor: isDark ? PURPLE_COLOR : "white",
      }}
      screenOptions={{
        tabBarLabelPosition: "beside-icon",
        tabBarStyle: {
          backgroundColor: isDark ? PURPLE_COLOR : "white",
        },
        tabBarActiveTintColor: isDark ? YELLOW_COLOR : GREEN_COLOR,
        tabBarInactiveTintColor: isDark ? "black" : GREEN_COLOR,
        headerStyle: { backgroundColor: isDark ? PURPLE_COLOR : "white" },
        headerTintColor: isDark ? YELLOW_COLOR : GREEN_COLOR,
      }}
    >
      <Tab.Screen
        options={{
          title: "영화",
          headerTitleAlign: "center",
          tabBarLabel: "Movies",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="movie" size={size} color={color} />
          ),
        }}
        name="Movies"
        component={Movies}
      />
      <Tab.Screen
        options={{
          title: "내가 작성한 댓글",
          tabBarLabel: "My",
          tabBarBadge: "hi",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="user" size={size} color={color} />
          ),
        }}
        name="My"
        component={My}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
