//import : react components
import React from 'react';
import {View, TouchableOpacity} from 'react-native';
//import : custom components
import MyText from 'components/MyText/MyText';
//import : third parties
//import : utils
import {Colors} from 'global/Colors';
//import : styles
//import : modals
//import : redux

const ActionInputBtn = ({title, placeholder, rightIcon}) => {
  return (
    <View
      style={{
        marginVertical: 5,
      }}>
      <MyText text={title} />
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderWidth: 1,
          borderColor: Colors.BORDER_COLOR,
          borderRadius: 5,
          width: '100%',
          paddingHorizontal: 10,
          columnGap: 5,
          height: 60,
        }}>
        <MyText
          text={placeholder}
          fontSize={12}
          textColor={Colors.BORDER_COLOR}
        />
        {rightIcon}
      </TouchableOpacity>
    </View>
  );
};

export default ActionInputBtn;
