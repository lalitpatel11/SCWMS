import {Text, StyleSheet, StyleProp, DimensionValue} from 'react-native';
import React from 'react';
import {Colors} from 'global/Colors';
import {Fonts} from 'global/Fonts';
import {RFValue} from 'react-native-responsive-fontsize';
interface textProp {
  text: string;
  textColor:
    | 'black'
    | 'white'
    | 'theme'
    | 'violet'
    | 'button_theme'
    | 'text_grey'
    | 'text_color'
    | 'grey'
    | 'sky_blue'
    | 'theme_red'
    | 'theme_blue'
    | 'green'
    | 'inactive_grey';
  fontSize?: number;
  fontFamily:
    | 'black'
    | 'bold'
    | 'extra_bold'
    | 'extra_light'
    | 'light'
    | 'medium'
    | 'regular'
    | 'semi_bold'
    | 'thin';
  textAlign?: 'auto' | 'center' | 'justify' | 'left' | 'right';
  alignSelf?:
    | 'auto'
    | 'baseline'
    | 'center'
    | 'flex-end'
    | 'flex-start'
    | 'stretch';
  fontWeight?:
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | 'black'
    | 'bold'
    | 'condensed'
    | 'condensedBold'
    | 'heavy'
    | 'light'
    | 'medium'
    | 'normal'
    | 'regular'
    | 'semibold'
    | 'thin'
    | 'ultralight';
  textDecorationLine?:
    | 'line-through'
    | 'underline line-through'
    | 'underline'
    | 'none';
  width?: DimensionValue;
  style?: any;
  marginLeft?: DimensionValue;
  marginVertical?: DimensionValue;
  marginBottom?: DimensionValue;
  marginTop?: DimensionValue;
  marginHorizontal?: DimensionValue;
  marginRight?: DimensionValue;
  numberOfLines?: number;
  lineHeight?: number;
}
const MyText: React.FC<textProp> = ({
  text,
  textColor = 'black',
  fontSize = 14,
  fontFamily = Fonts.REGULAR,
  textAlign,
  textDecorationLine,
  width,
  style,
  marginLeft,
  marginVertical,
  marginBottom,
  marginTop,
  marginHorizontal,
  marginRight,
  fontWeight,
  numberOfLines,
  lineHeight,
  alignSelf,
}) => {
  const getFontColor = () => {
    const keys: string[] = Object.keys(Colors).map(item => item?.toLowerCase());
    const values: string[] = Object.values(Colors).map((item: any) =>
      item?.toLowerCase(),
    );
    const idx: number = keys.findIndex(item => item == textColor);
    if (idx > 1) return values[idx];
    return textColor;
  };
  const getFontFamily = () => {
    const keys: string[] = Object.keys(Fonts).map(item => item?.toLowerCase());
    const values: string[] = Object.values(Fonts).map((item: any) => item);
    const idx: number = keys.findIndex(item => item == fontFamily);
    if (idx > 1) return values[idx];

    return fontFamily;
  };
  const styles = StyleSheet.create({
    textStyles: {
      color: getFontColor(),
      fontFamily: getFontFamily(),
      fontSize: RFValue(fontSize),
      textAlign: textAlign,
      textDecorationLine: textDecorationLine,
      width: width,
      marginLeft: marginLeft,
      marginVertical: marginVertical,
      marginBottom: marginBottom,
      marginTop: marginTop,
      marginHorizontal,
      marginRight,
      fontWeight: fontWeight,
      lineHeight: lineHeight,
      alignSelf: alignSelf,
    },
  });
  return (
    <Text numberOfLines={numberOfLines} style={[styles.textStyles, style]}>
      {text}
    </Text>
  );
};

export default MyText;
