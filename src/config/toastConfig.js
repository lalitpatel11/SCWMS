import MyText from 'components/MyText/MyText';
import {Colors} from 'global/Colors';
import {Text, View} from 'react-native';
import Toast, {BaseToast, ErrorToast} from 'react-native-toast-message';

export const toastConfig = {
  negative: ({text1, text2}) => (
    <View
      style={{
        width: '60%',
        padding: 5,
        borderRadius: 10,
        backgroundColor: '#333',
      }}>
      <MyText
        text={text1}
        textColor={Colors.WHITE}
        textAlign="center"
        fontFamily="semi_bold"
      />
      {text2 && (
        <MyText
          text={text2}
          textColor={Colors.WHITE}
          textAlign="center"
          fontFamily="semi_bold"
        />
      )}
    </View>
  ),
};
