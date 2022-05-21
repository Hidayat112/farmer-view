/**
 * This file contains the application's variables.
 *
 * Define color, sizes, etc. here instead of duplicating them throughout the components.
 * That allows to change them more easily later on.
 */

import { RFValue } from "react-native-responsive-fontsize"
import {Dimensions} from "react-native"
/**
 * Colors
 */
export const Colors = {
  // Example colors:
  transparent: 'rgba(0,0,0,0)',
  inputBackground: '#EFEFE7',
  white: '#ffffff',
  black:'#000000',
  placeHolderText: 'rgba(108, 172, 78, 1)',
  placeHolderTextLight: 'rgba(108, 172, 78, 0.5)',
  primary: '#EFEFE7',
  success: '#28a745',
  error: '#dc3545',
  borderColorLightGreen:"#6CAC4E",
  green:"#6CAC4E",
  darkGreen:"#026937"
}

export const NavigationColors = {
  primary: Colors.primary,
}

/**
 * FontSize
 */
export const FontSize = {
  small: RFValue(14),
  regular: RFValue(16),
  large: RFValue(18)
}

/**
 * Metrics Sizes
 */
const tiny = 5 // 10
const small = tiny * 2 // 10
const regular = tiny * 3 // 15
const large = regular * 2 // 30
export const MetricsSizes = {
  tiny,
  small,
  regular,
  large,
}

export const fontFamily = "Inter"

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;

export default {
  Colors,
  NavigationColors,
  FontSize,
  MetricsSizes,
  windowWidth,
  windowHeight
}
