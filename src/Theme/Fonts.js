/**
 * This file contains all application's style relative to fonts
 */
import { StyleSheet } from 'react-native'

/**
 *
 * @return {*}
 */
export default function ({ FontSize, Colors }) {
  return StyleSheet.create({
    textSmall: {
      fontSize: FontSize.small,
      fontFamily:"Inter"
    },
    textRegular: {
      fontSize: FontSize.regular,
      fontFamily:"Inter"
    },
    textLarge: {
      fontSize: FontSize.large,
      fontFamily:"Inter"
    },
    titleSmall: {
      fontSize: FontSize.small * 2,
      fontWeight: 'bold',
      fontFamily:"Inter"
    },
    titleRegular: {
      fontSize: FontSize.regular * 2,
      fontWeight: 'bold',
      fontFamily:"Inter"
    },
    titleLarge: {
      fontSize: FontSize.large * 2,
      fontWeight: 'bold',
      fontFamily:"Inter"
    },
    textCenter: {
      textAlign: 'center',
    },
    textJustify: {
      textAlign: 'justify',
    },
    textLeft: {
      textAlign: 'left',
    },
    textRight: {
      textAlign: 'right',
    },
  })
}
