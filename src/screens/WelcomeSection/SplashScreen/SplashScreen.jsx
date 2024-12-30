//import : react components
import React, {useEffect} from 'react';
import {Image} from 'react-native';
//import : custom components
//import : third parties
import LinearGradient from 'react-native-linear-gradient';
//import : utils
//import : styles
import {styles} from './SplashScreenStyle';
import {Colors} from 'global/Colors';
import {ScreenNames} from 'global/ScreensName';
//import : modals
//import : redux

const SplashScreen = ({navigation}) => {
  //function : nav func
  const gotoWelcome = () => {
    navigation.navigate(ScreenNames.WELCOME);
  };
  //hook : useEffect
  useEffect(() => {
    setTimeout(() => {
      gotoWelcome();
    }, 2000);
    return () => {};
  }, []);

  //UI
  return (
    <LinearGradient
      colors={[Colors.THEME, Colors.VIOLET]}
      style={styles.container}>
      <Image source={require('assets/images/image.png')} />
    </LinearGradient>
  );
};

export default SplashScreen;
