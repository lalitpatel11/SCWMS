//import : react components
import React from 'react';
import {View, TouchableOpacity, Image} from 'react-native';
//import : custom components
import AuthHeader from 'components/MyHeader/AuthHeader';
import MyButton from 'components/MyButton/MyButton';
import SizeBox from 'components/SizeBox/SizeBox';
import MyTextInput from 'components/MyTextInput/MyTextInput';
//import : third parties
//import : utils
import {Colors} from 'global/Colors';
import EditSvg from 'assets/svg/profile/edit.svg';
import UserSvg from 'assets/svg/profile/user.svg';
import SmsSvg from 'assets/svg/profile/sms.svg';
//import : styles
import {styles} from './EditProfileStyle';
//import : modals
//import : redux

const EditProfile = () => {
  //variables
  const profile_url = `https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D`;
  //UI
  return (
    <View style={styles.container}>
      <AuthHeader title={'Edit Profile'} />
      <View style={styles.mainView}>
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
        <MyTextInput placeholder={'Password'} leftIcon={<UserSvg />} />
        <SizeBox value={5} />
        <MyTextInput placeholder={'Password'} leftIcon={<SmsSvg />} />
        <SizeBox value={20} />
        <MyButton title={'Save'} />
      </View>
    </View>
  );
};

export default EditProfile;
