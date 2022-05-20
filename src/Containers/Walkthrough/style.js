import { windowHeight, windowWidth } from '@/Utilities/helper'
import { StyleSheet, I18nManager } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
export const styles = StyleSheet.create({
  lottieView: {
    alignItems: 'center',
    alignSelf: 'center',
    // marginTop: -windowHeight * 0.37,
  },
  lottie: {
    width: '250%',
    // bottom: 40,
  },
  innerCircleLottieView: {},
  innerCircleLottie: {
    width: '92%',
  },
  appNameBanner: {
    // position: 'absolute',
    // bottom: RFValue(80),
    marginTop: RFValue(50),
    alignSelf: 'center',
  },
})
