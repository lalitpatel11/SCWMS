//import : react components
import React from 'react';
import {View, Text} from 'react-native';
//import : custom components
import AuthHeader from 'components/MyHeader/AuthHeader';
import MyText from 'components/MyText/MyText';
import MyButton from 'components/MyButton/MyButton';
//import : third parties
//import : utils
import WelcomeSvg from 'assets/svg/welcome.svg';
//import : styles
import {styles} from './WelcomeScreenStyle';
import {ScreenNames} from 'global/ScreensName';
//import : modals
//import : redux

const WelcomeScreen = ({navigation}) => {
  //function : nav func
  const gotoSignIn = () => {
    navigation.navigate(ScreenNames.SIGN_IN);
  };
  //UI
  return (
    <View style={styles.container}>
      <AuthHeader title={'Introduction'} />
      <View style={styles.mainView}>
        <WelcomeSvg />
        <MyText
          text="Returns Resolved, Products Rehomed  -  Retail  Revolutionised"
          textAlign="center"
          marginVertical={20}
          fontSize={19}
        />
        <MyButton title={'Login'} onPress={() => gotoSignIn()} />
      </View>
    </View>
  );
};

export default WelcomeScreen;
