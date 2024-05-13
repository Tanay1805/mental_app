import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MiniBlockWrapper from "./screens/screens/homePage";
import StyledDivision from "./screens/screens/sessions";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={MiniBlockWrapper} options={{
          title : "Welcome!",
          headerStyle : {
            backgroundColor : '#EAFFEA',
          },
        }}/>
        <Stack.Screen
          name="Sessions"
          component={StyledDivision}
          initialParams={{
            name: "Guest",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
