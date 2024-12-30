//import : react
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
//import : utils
import {ScreenNames} from 'global/ScreensName';
//import : screens

const BookingStack = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={ScreenNames.BOOKING}>
      <Stack.Screen name={ScreenNames.BOOKING} component={Booking} />
    </Stack.Navigator>
  );
};

export default BookingStack;
