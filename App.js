import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./pages/Login";
import SignUpPage from "./pages/SignUp";

const Stack = createStackNavigator();

const App = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [navigation, setNavigation] = useState(null);

    useEffect(() => {
        setNavigation(Stack.navigation);
    }, []);

    const toggleLogin = () => {
        setIsLogin(!isLogin);
    };

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Login"
                    component={() => (
                        <Login
                            toggleLogin={toggleLogin}
                            isLogin={isLogin}
                            navigation={navigation}
                        />
                    )}
                />
                <Stack.Screen
                    name="SignUp"
                    component={() => (
                        <SignUpPage
                            toggleLogin={toggleLogin}
                            isLogin={!isLogin}
                            navigation={navigation}
                        />
                    )}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
