//import : react components
import React, {useState} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
//import : custom components
import AuthHeader from 'components/MyHeader/AuthHeader';
import MyText from 'components/MyText/MyText';
import SizeBox from 'components/SizeBox/SizeBox';
import MyButton from 'components/MyButton/MyButton';
//import : third parties
//import : utils
import CalendarSvg from 'assets/svg/calendar-tick.svg';
import {Colors} from 'global/Colors';
import {MyIcon} from 'global/MyIcon';
import LocationSvg from 'assets/svg/location.svg';
//import : styles
import {styles} from './ListPageStyle';
//import : modals
import ScanNew from 'modals/ScanNew/ScanNew';
import SuccessModal from 'modals/SuccessModal/SuccessModal';
//import : redux

const ListPage = () => {
  //variables
  const data = [1, 2, 3, 4];
  //hook : states
  const [showScanNew, setShowScanNew] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  //UI
  return (
    <View style={styles.container}>
      <AuthHeader title={'List Page'} />
      <View style={styles.mainView}>
        <TouchableOpacity
          onPress={() => setShowScanNew(true)}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              backgroundColor: Colors.WHITE,
              height: 60,
              alignItems: 'center',
              width: '58%',
              paddingLeft: 10,
              columnGap: 5,
              borderRadius: 5,
            }}>
            <MyIcon.AntDesign name="calendar" color={Colors.BLACK} size={24} />
            <MyText text="Sort by Date" fontSize={12} textColor={'text_grey'} />
          </View>

          <MyButton title={'Scan New'} width="40%" disabled={true} />
        </TouchableOpacity>
        <FlatList
          data={data}
          contentContainerStyle={{
            paddingBottom: '50%',
          }}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={() => <SizeBox value={15} />}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  backgroundColor: Colors.THEME,
                  paddingLeft: 2,
                  borderRadius: 15,
                }}>
                <View
                  style={{
                    backgroundColor: Colors.WHITE,
                    borderRadius: 15,
                    padding: 20,
                  }}>
                  <MyText text="Package ID" fontFamily="medium" />
                  <MyText text="ORD-0-8763874237-0000037" />
                  <MyButton title={'View Image'} height={40} width="50%" />
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      marginTop: 10,
                    }}>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        columnGap: 5,
                      }}>
                      <LocationSvg />
                      <View>
                        <MyText
                          text="Location ID"
                          fontFamily="medium"
                          fontSize={12}
                        />
                        <MyText text="A001-004-001" fontSize={12} />
                      </View>
                    </View>
                    <View
                      style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        columnGap: 5,
                      }}>
                      <CalendarSvg />
                      <View>
                        <MyText
                          text="Date & time:"
                          fontFamily="medium"
                          fontSize={12}
                        />
                        <MyText text="02 Dec 2024: 04:12 PM" fontSize={12} />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            );
          }}
        />
      </View>
      <ScanNew
        visible={showScanNew}
        setVisibility={setShowScanNew}
        nextFunction={() => setShowSuccess(true)}
      />
      <SuccessModal
        visible={showSuccess}
        setVisibility={setShowSuccess}
        msg={'Item Assigned To Location Successfully'}
      />
    </View>
  );
};

export default ListPage;
