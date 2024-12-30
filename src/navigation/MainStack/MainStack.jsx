//import : react components
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
//import : globals
import {ScreenNames} from 'global/ScreensName';
//import : screens
import SplashScreen from 'screens/WelcomeSection/SplashScreen/SplashScreen';
import WelcomeScreen from 'screens/WelcomeSection/WelcomeScreen/WelcomeScreen';
import SignInScreen from 'screens/WelcomeSection/SignInScreen/SignInScreen';
import BottomTab from 'navigation/BottomTab/BottomTab';
import EditProfile from 'screens/HomeSection/EditProfile/EditProfile';
import ListPage from 'screens/HomeSection/ListPage/ListPage';

const MainStack = () => {
  //variables
  const Stack = createStackNavigator();
  //UI
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={ScreenNames.SPLASH} component={SplashScreen} />
      <Stack.Screen name={ScreenNames.WELCOME} component={WelcomeScreen} />
      <Stack.Screen name={ScreenNames.SIGN_IN} component={SignInScreen} />
      <Stack.Screen name={ScreenNames.BOTTOM_TAB} component={BottomTab} />
      <Stack.Screen name={ScreenNames.EDIT_PROFILE} component={EditProfile} />
      <Stack.Screen name={ScreenNames.LIST_PAGE} component={ListPage} />
    </Stack.Navigator>
  );
};

export default MainStack;
