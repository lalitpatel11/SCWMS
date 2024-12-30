//import : react components
import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
//import : custom components
//import : third parties
//import : utils
import MenuSvg from 'assets/svg/header/menu.svg';
import NotificartionSvg from 'assets/svg/header/notification.svg';
import {Colors} from 'global/Colors';
//import : styles
//import : modals
//import : redux

const MainHeader = () => {
  //UI
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 70,
        paddingHorizontal: 10,
        backgroundColor: Colors.WHITE,
      }}>
      <TouchableOpacity>
        <MenuSvg />
      </TouchableOpacity>
      <Image
        resizeMode="contain"
        source={require('assets/images/image.png')}
        style={{
          height: 50,
          width: 70,
        }}
      />
      <NotificartionSvg />
    </View>
  );
};

export default MainHeader;
