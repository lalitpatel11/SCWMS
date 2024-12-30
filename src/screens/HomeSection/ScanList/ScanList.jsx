//import : react components
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
//import : custom components
import MainHeader from 'components/MyHeader/MainHeader';
import MyText from 'components/MyText/MyText';
//import : third parties
//import : utils
import RightSvg from 'assets/svg/home/right.svg';
import {Colors} from 'global/Colors';
//import : styles
import {styles} from './ScanListStyle';
import {ScreenNames} from 'global/ScreensName';
//import : modals
//import : redux

const ScanList = ({navigation}) => {
  //function : nav func
  const gotoListPage = () => {
    navigation.navigate(ScreenNames.LIST_PAGE);
  };
  //UI
  return (
    <View style={styles.container}>
      <MainHeader />
      <View style={styles.mainView}>
        <ScanListItem
          title={'Scan'}
          desc={'Into Location'}
          onPress={() => gotoListPage()}
        />
        <ScanListItem title={'Scan'} desc={'Out Of Location'} />
        <ScanListItem title={'Pack &'} desc={'Dispatch'} />
        <ScanListItem title={'Move'} desc={'Parcel'} />
      </View>
    </View>
  );
};

export default ScanList;

const ScanListItem = ({title, desc, onPress = () => {}}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        marginVertical: 5,
        backgroundColor: Colors.WHITE,
        borderWidth: 1,
        borderColor: Colors.THEME,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 10,
        borderRadius: 15,
      }}>
      <View>
        <MyText text={title} textColor="violet" fontFamily="semi_bold" />
        <MyText text={desc} fontSize={12} fontFamily="medium" />
      </View>
      <RightSvg />
    </TouchableOpacity>
  );
};
