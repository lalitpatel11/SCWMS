//import : react components
import React from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
//import : custom components
import MyText from 'components/MyText/MyText';
import MyButton from 'components/MyButton/MyButton';
import ActionInputBtn from 'components/ActionInputBtn/ActionInputBtn';
//import : third parties
//import : utils
import TickCircleSvg from 'assets/svg/tick-circle.svg';
import ScanSvg from 'assets/svg/scan.svg';
import CameraSvg from 'assets/svg/camera.svg';
//import : styles
import {styles} from './SuccessModalStyle';
import SizeBox from 'components/SizeBox/SizeBox';
//import : modals
//import : redux

const SuccessModal = ({visible, setVisibility, msg}) => {
  //function : modal func
  const closeModal = () => {
    setVisibility(false);
  };

  //UI
  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.blurView}
          onPress={() => closeModal()}
        />
        <View style={styles.mainView}>
          <TickCircleSvg
            style={{
              alignSelf: 'center',
            }}
          />
          <View
            style={{
              width: '70%',
              alignSelf: 'center',
            }}>
            <MyText
              text={msg}
              fontFamily="medium"
              textAlign="center"
              fontSize={20}
              marginVertical={20}
            />
          </View>

          <MyButton title={'Close'} onPress={() => closeModal()} />
        </View>
      </View>
    </Modal>
  );
};

export default SuccessModal;
