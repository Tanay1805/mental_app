import { createStackNavigator } from '@react-navigation/stack';
import OtpPage from './OtpPage';

const Stack = createStackNavigator();

const OtpPageStack = () =>{
  return (
    <Stack.Navigator>
      <Stack.Screen name="OtpPage" component={OtpPage} options={{ title: 'OTP Verification' }} />
    </Stack.Navigator>
  );
};

export default OtpPageStack;