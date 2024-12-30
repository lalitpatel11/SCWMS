import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {MyIcon} from 'global/MyIcon';
import {Colors} from 'global/Colors';

const CustomBottomTab = ({state, descriptors, navigation}) => {
  const screenWidth = Dimensions.get('window').width;
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        if (route.name === 'SCAN_LIST') {
          return null; // Skip "Scan" tab in default layout
        }

        return (
          <TouchableOpacity key={index} style={styles.tab} onPress={onPress}>
            <MyIcon.Ionicons
              name={route.name === 'Home' ? 'home-outline' : 'person-outline'}
              size={24}
              color={isFocused ? 'green' : 'gray'}
            />
            <Text style={{color: isFocused ? 'green' : 'gray'}}>{label}</Text>
          </TouchableOpacity>
        );
      })}

      {/* Floating Central Button */}
      <View style={styles.fabContainer}>
        <TouchableOpacity
          style={styles.fab}
          onPress={() => navigation.navigate('SCAN_LIST')}>
          <MyIcon.Ionicons name="scan-outline" size={28} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomBottomTab;

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 70,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: -3},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 5,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fabContainer: {
    position: 'absolute',
    right: '45%',
    bottom: 25,
    alignSelf: 'center',
    zIndex: 10,
  },
  fab: {
    backgroundColor: '#4B0082', // Deep purple color
    width: 70,
    height: 70,
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 5},
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    borderWidth: 5,
    borderColor: Colors.PAGE_BG,
  },
});
