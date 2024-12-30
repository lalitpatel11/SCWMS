//import : react components
import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
//import : custom components
import MainHeader from 'components/MyHeader/MainHeader';
import MyText from 'components/MyText/MyText';
import MyButton from 'components/MyButton/MyButton';
import SizeBox from 'components/SizeBox/SizeBox';
//import : third parties
//import : utils
import CallSvg from 'assets/svg/profile/call.svg';
import SmsSvg from 'assets/svg/profile/sms.svg';
import EditSvg from 'assets/svg/profile/edit.svg';
import {Colors} from 'global/Colors';
import {ScreenNames} from 'global/ScreensName';
//import : styles
import {styles} from './MyProfileStyle';
//import : modals
//import : redux

const MyProfile = ({navigation}) => {
  //variables
  const profile_url = `https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D`;
  //function : nav func
  const gotoEditProfile = () => {
    navigation.navigate(ScreenNames.EDIT_PROFILE);
  };
  //UI
  return (
    <View style={styles.container}>
      <MainHeader />
      <View style={styles.mainView}>
        <View
          style={{
            backgroundColor: Colors.WHITE,
            padding: 20,
            borderRadius: 15,
          }}>
          <TouchableOpacity
            style={{
              height: 100,
              width: 100,
              alignSelf: 'center',
            }}>
            <Image
              source={{uri: profile_url}}
              style={{
                height: '100%',
                width: '100%',
                borderRadius: 100,
              }}
            />
            <View
              style={{
                backgroundColor: Colors.WHITE,
                borderRadius: 100,
                position: 'absolute',
                bottom: -10,
                left: '40%',
              }}>
              <EditSvg />
            </View>
          </TouchableOpacity>
          <SizeBox value={20} />
          <MyText
            text="Michele Jeff"
            fontFamily="medium"
            fontSize={18}
            textColor="theme"
            textAlign="center"
          />
          <SizeBox value={10} />
          <View
            style={{
              flexDirection: 'row',
              alignSelf: 'center',
              alignItems: 'center',
              columnGap: 10,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                columnGap: 5,
              }}>
              <CallSvg />
              <MyText text="+1 8763939993" />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                columnGap: 5,
              }}>
              <SmsSvg />
              <MyText text="Jeff@gmail.com" />
            </View>
          </View>
          <SizeBox value={20} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <MyButton title={'logout'} width="48%" />
            <MyButton
              title={'Edit Profile'}
              width="48%"
              onPress={() => gotoEditProfile()}
              backgroundColor={Colors.VIOLET}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default MyProfile;
