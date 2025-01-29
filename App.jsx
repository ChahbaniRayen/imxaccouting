import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from './Screens/LoginScreen';
import {OTPVerifyScreen} from './Screens/OTPVerifyScreen';
import ChoseCompanyScreen from './Screens/ChoseCompanyScreen';
import ApportsScreen from './Screens/ApportsScreen';
import DepensesScreen from './Screens/DepensesScreen';
// import ApportsScreen from './Screens/ApportsScreen';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="OTPVerifyScreen" component={OTPVerifyScreen} />
        <Stack.Screen
          name="ChoseCompanyScreen"
          component={ChoseCompanyScreen}
        />
        <Stack.Screen name="ApportsScreen" component={ApportsScreen} />
        <Stack.Screen name="DepensesScreen" component={DepensesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
