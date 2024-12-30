//import : react components
import React from 'react';
import {View, Image} from 'react-native';
//import : custom components
import AuthHeader from 'components/MyHeader/AuthHeader';
import MyText from 'components/MyText/MyText';
import MyButton from 'components/MyButton/MyButton';
import MyTextInput from 'components/MyTextInput/MyTextInput';
import SizeBox from 'components/SizeBox/SizeBox';
//import : third parties
//import : utils
import SmsSvg from 'assets/svg/sms.svg';
import LockSvg from 'assets/svg/lock.svg';
//import : styles
import {styles} from './SignInScreenStyle';
import {ScreenNames} from 'global/ScreensName';
//import : modals
//import : redux

const SignInScreen = ({navigation}) => {
  //function : nav func
  const gotoBottomTab = () => {
    navigation.navigate(ScreenNames.BOTTOM_TAB);
  };
  //UI
  return (
    <View style={styles.container}>
      <AuthHeader title={'Sign In'} />
      <View style={styles.mainView}>
        <Image source={require('assets/images/image.png')} />
        <SizeBox value={20} />
        <MyText text="Please Enter Your Email & Password" marginVertical={10} />
        <SizeBox value={20} />
        <MyTextInput placeholder={'Email Address'} leftIcon={<SmsSvg />} />
        <SizeBox value={10} />
        <MyTextInput
          placeholder={'Password'}
          leftIcon={<LockSvg />}
          hasPassword
        />
        <SizeBox value={20} />
        <MyButton title={'Sign In'} onPress={gotoBottomTab} />
        <SizeBox value={10} />
        <MyText text="Forgot Your Password?" fontFamily="medium" />
      </View>
    </View>
  );
};

export default SignInScreen;
