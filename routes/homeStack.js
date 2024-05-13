import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {createAppContainer} from 'react-navigation';
import MiniBlockWrapper  from "../components/homePage";
import StyledDivision from '../components/sessions';
import StatisticPage from '../components/statistics';
import Sleep from '../components/sleep';

const screens = {
    Home : {
        screen : MiniBlockWrapper,
    },
    Sessions : {
        screen : StyledDivision,
    },
    Sleep : {
        screen : Sleep,
    },
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);