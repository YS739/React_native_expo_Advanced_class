import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Movies from "../screen/Movies";
import My from "../screen/My";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="my"
      sceneContainerStyle={{
        backgroundColor: "lavender",
      }}
      screenOptions={{
        tabBarLabelPosition: "beside-icon",
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
