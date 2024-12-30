import {View, Text} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {ScreenNames} from 'global/ScreensName';
import MainStack from 'navigation/MainStack/MainStack';
import CustomDrawer from './CustomDrawer';
import {Colors} from 'global/Colors';
const DrawerStack = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {
          backgroundColor: '#073432',
          borderTopRightRadius: 20,
          borderBottomRightRadius: 20,
        },
      }}
      // drawerContent={() => <CustomDrawer />}
      >
      <Drawer.Screen name={ScreenNames.MAIN_STACK} component={MainStack} />
    </Drawer.Navigator>
  );
};

export default DrawerStack;
