import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StyledDivision from "./screens/screens/sessions";
import Sleep from "./screens/screens/sleep";
import Activity from "./screens/screens/activity";
import Community from "./screens/screens/community";
import MiniBlockWrapper from './screens/screens/homePage';
import MusicPage from './screens/screens/music';
import Ionicons from '@expo/vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App(){
    return(

        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                tabBarShowLabel : false,
                tabBarActiveTintColor : '#68B2A0',
                tabBarInactiveTintColor : '#898B98',
                tabBarStyle : {backgroundColor : '#EAEEF5'}
            }}>
                <Tab.Screen name="Home" component={MiniBlockWrapper} options={{
                    tabBarIcon : ({ color }) => <Ionicons name="home" size={30} color={ color } style={{marginTop : 12}}/>, headerShown : false
                }}/>
                <Tab.Screen name="Sessions" component={StyledDivision} options={{
                    tabBarIcon : ({ color }) => <Ionicons name="videocam" size={30}
                    color={ color } style={{marginTop : 12}}/>, headerShown : false
                }}/>
                <Tab.Screen name="Music" component={MusicPage} options={{
                    tabBarIcon : ({ color }) => <Ionicons name="musical-notes" size={30}
                    color={ color } style={{marginTop : 12}}/>, headerShown : false
                }}/>
                <Tab.Screen name="Community" component={Community} options={{
                    tabBarIcon : ({ color }) => <Ionicons name="people" size={30}
                    color={ color } style={{marginTop : 12}}/>, headerShown : false
                }}/>
                {/* <Tab.Screen name="Sleep" component={Sleep} options={{headerShown : false}}/> */}
            </Tab.Navigator>

        </NavigationContainer>
    )
}