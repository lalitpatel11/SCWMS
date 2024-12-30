//import : react components
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
//import : custom components
import MainHeader from 'components/MyHeader/MainHeader';
//import : third parties
//import : utils
import NotificationSvg from 'assets/svg/home/notification.svg';
import Home1Svg from 'assets/svg/home/home1.svg';
import Home2Svg from 'assets/svg/home/home2.svg';
import Home3Svg from 'assets/svg/home/home3.svg';
import Home4Svg from 'assets/svg/home/home4.svg';
import RightSvg from 'assets/svg/home/right.svg';
//import : styles
import {styles} from './HomeStyle';
import MyText from 'components/MyText/MyText';
import {Colors} from 'global/Colors';
import SizeBox from 'components/SizeBox/SizeBox';
//import : modals
//import : redux

const Home = () => {
  //UI
  return (
    <View style={styles.container}>
      <MainHeader />
      <View style={styles.mainView}>
        <View
          style={{
            backgroundColor: Colors.WHITE,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: 20,
            borderRadius: 16,
          }}>
          <View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                columnGap: 5,
              }}>
              <View
                style={{
                  backgroundColor: Colors.THEME,
                  padding: 5,
                  borderRadius: 10,
                }}>
                <MyText text="+4" textColor="white" fontSize={12} />
              </View>

              <MyText text="15 New Package Added." />
            </View>
            <MyText text="Today" />
          </View>

          <NotificationSvg />
        </View>
        <SizeBox value={15} />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <HomeItem
            icon={<Home1Svg />}
            title={'Scan'}
            desc={'Into Location'}
            width={'48%'}
          />
          <HomeItem
            icon={<Home2Svg />}
            width={'48%'}
            title={'Scan'}
            desc={'Out of Location'}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 15,
          }}>
          <HomeItem
            icon={<Home3Svg />}
            title={'Pack &'}
            desc={'Dispatch'}
            width={'48%'}
          />
          <HomeItem
            icon={<Home4Svg />}
            width={'48%'}
            title={'Move'}
            desc={'Parcel'}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;

const HomeItem = ({icon, title, desc, width}) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: Colors.WHITE,
        width: width,
        borderRadius: 15,
        padding: 20,
      }}>
      {icon}
      <SizeBox value={10} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View>
          <MyText text={title} fontFamily="semi_bold" />
          <MyText text={desc} fontSize={10} fontFamily="medium" />
        </View>

        <RightSvg />
      </View>
    </TouchableOpacity>
  );
};
