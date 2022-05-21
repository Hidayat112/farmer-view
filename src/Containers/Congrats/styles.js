import { Colors, fontFamily, FontSize, windowHeight } from '@/Theme/Variables'
import { StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

export const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  congratsMessage: {
    marginTop: RFValue(157),
    textAlign: 'center',
    fontSize: RFValue(22),
    fontWeight: '700',
    fontFamily: fontFamily,
    color: Colors.darkGreen,
    letterSpacing: 0.4,
  },
  farmerMessage: {
    textAlign: 'center',
    fontSize: RFValue(12),
    fontWeight: '600',
    fontFamily: fontFamily,
    color: Colors.darkGreen,
  },
  buttonStyle: {
    backgroundColor: Colors.primary,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: RFValue(10),
    width: '90%',
    alignSelf: 'center',
  },
})
