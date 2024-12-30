//import : react components
import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
//import : custom components
import MyText from 'components/MyText/MyText';
//import : third parties
//import : utils
import {MyIcon} from 'global/MyIcon';
import {Colors} from 'global/Colors';
//import : styles
//import : modals
//import : redux

const AuthHeader = ({title}) => {
  //variables
  const navigation = useNavigation();
  //function : nav func
  const goBack = () => {
    navigation.goBack();
  };
  //UI
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        height: 60,
        backgroundColor: Colors.WHITE,
      }}>
      <TouchableOpacity onPress={() => goBack()}>
        <MyIcon.AntDesign name="arrowleft" color={Colors.BLACK} size={24} />
      </TouchableOpacity>

      <MyText text={title} fontFamily="semi_bold" />
      <MyText text="hh" textColor="transparent" />
    </View>
  );
};

export default AuthHeader;
