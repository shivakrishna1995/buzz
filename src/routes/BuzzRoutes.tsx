import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SignUpCountryCode from '../pages/SignUpCountryCode/SignUpCountryCode.container';
import SignUpName from '../pages/SignUpName/SignUpName.container';
import SignUpPassword from '../pages/SignUpPassword/SignUpPassword.container';
import SignUpPhoneNumber from '../pages/SignUpPhoneNumber/SignUpPhoneNumber.container';
import SignUpUsername from '../pages/SignUpUsername/SignUpUsername.container';
import SignUpVerification from '../pages/SignUpVerification/SignUpVerification.container';
import SplashScreen from '../pages/SplashScreen/SplashScreen.container';

type RootStackTypes = {
  SplashScreen: undefined;
  SignUpPhoneNumber: undefined;
  SignUpCountryCode: undefined;
  SignUpVerification: undefined;
  SignUpUsername: undefined;
  SignUpName: undefined;
  SignUpPassword: undefined;
};

const Stack = createNativeStackNavigator<RootStackTypes>();

const BuzzRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="SignUpPhoneNumber" component={SignUpPhoneNumber} />
        <Stack.Screen name="SignUpCountryCode" component={SignUpCountryCode} />
        <Stack.Screen name="SignUpVerification" component={SignUpVerification} />
        <Stack.Screen name="SignUpUsername" component={SignUpUsername} />
        <Stack.Screen name="SignUpName" component={SignUpName} />
        <Stack.Screen name="SignUpPassword" component={SignUpPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default BuzzRoutes;
