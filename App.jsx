import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from './Screens/LoginScreen';
import {OTPVerifyScreen} from './Screens/OTPVerifyScreen';
import ChoseCompanyScreen from './Screens/ChoseCompanyScreen';
import ApportsScreen from './Screens/ApportsScreen';
import DepensesScreen from './Screens/DepensesScreen';
import Toast from 'react-native-toast-message';
import DashbordScreen from './Screens/DashbordScreen';

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="ChoseCompanyScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="OTPVerifyScreen" component={OTPVerifyScreen} />
        <Stack.Screen
          name="ChoseCompanyScreen"
          component={ChoseCompanyScreen}
        />
        <Stack.Screen name="ApportsScreen" component={ApportsScreen} />
        <Stack.Screen name="DepensesScreen" component={DepensesScreen} />
        <Stack.Screen name="DashbordScreen" component={DashbordScreen} />
      </Stack.Navigator>
      <Toast />
    </NavigationContainer>
  );
}
