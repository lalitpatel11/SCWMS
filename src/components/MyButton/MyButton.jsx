import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import MyText from 'components/MyText/MyText';
import {Colors} from 'global/Colors';

const MyButton = ({
  title,
  onPress = () => {},
  backgroundColor = Colors.THEME,
  width = '100%',
  height = 60,
  disabled,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={() => onPress()}
      style={{
        backgroundColor: backgroundColor,
        width: width,

        justifyContent: 'center',
        alignItems: 'center',
        height: height,
        borderRadius: 5,
      }}>
      <MyText text={title} fontFamily="semi_bold" textColor="white" />
    </TouchableOpacity>
  );
};

export default MyButton;
