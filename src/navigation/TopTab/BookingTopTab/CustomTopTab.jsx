import {View, Text, Animated, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import MyText from 'components/MyText/MyText';
import {styles} from './CustomTopTabStyle';
import {Colors} from 'global/Colors';
const CustomTopTab = ({state, descriptors, navigation, position}) => {
  const names = ['Check-In', 'Check-Out'];
  const renderItem = ({item, index}) => {
    const isFocused = state.index === index;
    const route = item;
    const onPress = () => {
      const event = navigation.emit({
        type: 'tabPress',
        target: route.key,
        canPreventDefault: true,
      });

      if (!isFocused && !event.defaultPrevented) {
        navigation?.navigate(route.name);
      }
    };
    return (
      <Animated.View
        style={{
          ...styles.TabView,
          backgroundColor: isFocused ? Colors.BUTTON_THEME : Colors.BG_GREY,
        }}>
        <TouchableOpacity onPress={onPress} style={styles.item}>
          <MyText
            text={names[index]}
            textColor={isFocused ? 'white' : 'black'}
            fontSize={14}
            marginHorizontal={5}
          />
        </TouchableOpacity>
      </Animated.View>
    );
  };
  return (
    <Animated.View style={styles.container}>
      <FlatList
        columnWrapperStyle={{
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          marginBottom: 10,
        }}
        numColumns={2}
        data={state.routes}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
      />
    </Animated.View>
  );
};

export default CustomTopTab;
