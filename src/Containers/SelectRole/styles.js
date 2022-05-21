import { Colors, fontFamily, FontSize, windowHeight } from '@/Theme/Variables'
import { StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

export const styles = StyleSheet.create({
  mainContainer: { flex: 1, paddingHorizontal: RFValue(24)},
  roleTextStyle: {
    marginTop: RFValue(69),
    textAlign: 'center',
    fontSize: RFValue(20),
    fontWeight: '700',
    fontFamily: fontFamily,
    color: Colors.green,
    letterSpacing: 0.4,
  },
  roleMessageStyle: {
    marginTop: RFValue(7),
    textAlign: 'center',
    fontSize: RFValue(16),
    fontWeight: '600',
    fontFamily: fontFamily,
    color: Colors.darkGreen,
    letterSpacing: 0.4,
  },

  buttonsContainer:{
    marginTop:RFValue(61)
  },
  buttonStyle:{
    position:"absolute",
    bottom:RFValue(10),
    alignSelf:"center"
  }
})
