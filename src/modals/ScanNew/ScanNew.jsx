//import : react components
import React from 'react';
import {View, Modal, TouchableOpacity} from 'react-native';
//import : custom components
import MyText from 'components/MyText/MyText';
import MyButton from 'components/MyButton/MyButton';
import ActionInputBtn from 'components/ActionInputBtn/ActionInputBtn';
import SizeBox from 'components/SizeBox/SizeBox';
//import : third parties
//import : utils
import ScanSvg from 'assets/svg/scan.svg';
import CameraSvg from 'assets/svg/camera.svg';
//import : styles
import {styles} from './ScanNewStyle';
//import : modals
//import : redux

const ScanNew = ({visible, setVisibility, nextFunction = () => {}}) => {
  //function : modal func
  const closeModal = () => {
    setVisibility(false);
  };
  //function : imp func
  const saveBtnHandle = () => {
    closeModal();
    nextFunction();
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
          <MyText text="Scan New" textAlign="center" fontFamily="extra_bold" />
          <SizeBox value={10} />
          <ActionInputBtn
            title={'Scan Package ID'}
            placeholder={'ORD-0-8763874237-0000037'}
            rightIcon={<ScanSvg />}
          />
          <ActionInputBtn
            title={'Scan Location ID'}
            placeholder={'A001-001-001'}
            rightIcon={<ScanSvg />}
          />
          <ActionInputBtn
            title={'Add Photo'}
            placeholder={'Click A Photo'}
            rightIcon={<CameraSvg />}
          />
          <SizeBox value={10} />
          <MyButton title={'Save'} onPress={() => saveBtnHandle()} />
        </View>
      </View>
    </Modal>
  );
};

export default ScanNew;
