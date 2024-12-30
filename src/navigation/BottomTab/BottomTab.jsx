import {ScreenNames} from 'global/ScreensName';
import {CurvedBottomBar} from 'react-native-curved-bottom-bar';
import Ionicons from 'react-native-vector-icons/Ionicons';

//import : react components
import React from 'react';
import {
  Alert,
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
//import : custom components
import MyText from 'components/MyText/MyText';
//import : third parties
//import : utils
import HomeActSvg from 'assets/svg/bottomtab/home-active.svg';
import HomeInActSvg from 'assets/svg/bottomtab/home-inactive.svg';
import ProfileActSvg from 'assets/svg/bottomtab/profile-active.svg';
import ProfileInActSvg from 'assets/svg/bottomtab/profile-inative.svg';
import ScanInActSvg from 'assets/svg/bottomtab/scan_inactive.svg';
import ScanActSvg from 'assets/svg/bottomtab/scan-active.svg';
//import : styles
//import : Screens
import Home from 'screens/HomeSection/Home/Home';
import MyProfile from 'screens/HomeSection/MyProfile/MyProfile';
import ScanList from 'screens/HomeSection/ScanList/ScanList';
//import : modals
//import : redux

const BottomTab = () => {
  const _renderIcon = (routeName, selectedTab) => {
    console.log('TEST', routeName, selectedTab);

    if (routeName == ScreenNames.HOME) {
      return (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {routeName == selectedTab ? <HomeActSvg /> : <HomeInActSvg />}
          <MyText
            text="Home"
            textColor={routeName == selectedTab ? 'theme' : 'black'}
            fontSize={12}
          />
        </View>
      );
    } else {
      return (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {routeName == selectedTab ? <ProfileActSvg /> : <ProfileInActSvg />}
          <MyText
            text="My profile"
            textColor={routeName == selectedTab ? 'theme' : 'black'}
            fontSize={12}
          />
        </View>
      );
    }
  };
  const renderTabBar = ({routeName, selectedTab, navigate}) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={styles.tabbarItem}>
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  return (
    <CurvedBottomBar.Navigator
      type="DOWN"
      style={styles.bottomBar}
      shadowStyle={styles.shawdow}
      height={70}
      circleWidth={60}
      bgColor="white"
      initialRouteName={ScreenNames.HOME}
      borderTopLeftRight
      renderCircle={({routeName, selectedTab, navigate}) => (
        <Animated.View style={styles.btnCircleUp}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigate(routeName)}>
            {routeName == selectedTab ? <ScanActSvg /> : <ScanInActSvg />}
          </TouchableOpacity>
        </Animated.View>
      )}
      tabBar={renderTabBar}>
      <CurvedBottomBar.Screen
        name={ScreenNames.HOME}
        position="LEFT"
        component={() => <Home />}
        options={{headerShown: false}}
      />
      <CurvedBottomBar.Screen
        name={ScreenNames.SCAN_LIST}
        position="CENTER"
        component={() => <ScanList />}
        options={{headerShown: false}}
      />
      <CurvedBottomBar.Screen
        name={ScreenNames.MY_PROFILE}
        component={() => <MyProfile />}
        position="RIGHT"
        options={{headerShown: false}}
      />
    </CurvedBottomBar.Navigator>
  );
};
export default BottomTab;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  shawdow: {
    shadowColor: '#DDDDDD',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
  },
  bottomBar: {},
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8E8E8',
    bottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: 'gray',
  },
  tabbarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 30,
    height: 30,
  },
  screen1: {
    flex: 1,
    backgroundColor: '#BFEFFF',
  },
  screen2: {
    flex: 1,
    backgroundColor: '#FFEBCD',
  },
});
