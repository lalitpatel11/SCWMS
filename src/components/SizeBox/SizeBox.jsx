import {View, Text} from 'react-native';
import React from 'react';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

const SizeBox = ({value = 0, percentage}) => {
  return (
    <View
      style={{
        height: percentage ? RFPercentage(percentage) : RFValue(value),
        width: percentage ? RFPercentage(percentage) : RFValue(value),
      }}
    />
  );
};

export default SizeBox;
