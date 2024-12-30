import {View, Text, TextInput, Pressable} from 'react-native';
import React, {useState} from 'react';
import {Colors} from 'global/Colors';
import {MyIcon} from 'global/MyIcon';

const MyTextInput = ({placeholder, hasPassword = false, leftIcon}) => {
  //hook : states
  const [show, setShow] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(hasPassword);
  //UI
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: Colors.BORDER_COLOR,
        borderRadius: 5,
        width: '100%',
        paddingHorizontal: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          columnGap: 5,
        }}>
        {leftIcon && leftIcon}
        <TextInput
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          placeholderTextColor={Colors.TEXT_GREY}
        />
      </View>

      {hasPassword && (
        <Pressable
          onPress={() => {
            setSecureTextEntry(!secureTextEntry);
            setShow(!show);
          }}
          style={{}}>
          <MyIcon.Feather
            name={show ? 'eye' : 'eye-off'}
            color={Colors.BORDER_COLOR}
            size={20}
          />
        </Pressable>
      )}
    </View>
  );
};

export default MyTextInput;
