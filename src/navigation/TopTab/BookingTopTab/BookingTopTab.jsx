//import : react components
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
//import : utils
import {ScreenNames} from 'global/ScreensName';
//import : screens
import CustomTopTab from './CustomTopTab';
import CheckInList from 'screens/Booking/CheckInList/CheckInList';
import CheckOutList from 'screens/Booking/CheckOutList/CheckOutList';

const BookingTopTab = () => {
  //variables
  const Tab = createMaterialTopTabNavigator();
  //function : render func
  const renderCustomTab = props => <CustomTopTab {...props} />;
  //UI
  return (
    <Tab.Navigator tabBar={renderCustomTab}>
      <Tab.Screen name={ScreenNames.CHECK_IN_LIST} component={CheckInList} />
      <Tab.Screen name={ScreenNames.CHECK_OUT_LIST} component={CheckOutList} />
    </Tab.Navigator>
  );
};

export default BookingTopTab;
