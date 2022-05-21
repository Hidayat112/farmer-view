import { Colors, fontFamily, FontSize, windowHeight } from '@/Theme/Variables'
import { StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

export const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: RFValue(26),
    marginTop: RFValue(32),
  },
  backIconStyle: {
    height: RFValue(20),
    width: RFValue(30),
  },
  titleStyle: {
    fontFamily: fontFamily,
    fontSize: FontSize.small,
    fontWeight: '700',
    color: Colors.darkGreen,
    marginLeft: RFValue(8),
    
  },
  mainContainer: {
    paddingHorizontal: RFValue(22),
    justifyContent: 'center',
    alignItems: 'center',
  },
  mobileInputContainer: {
    marginTop: RFValue(59),
    alignSelf:"flex-start",
    width:"100%"
  },
  mobileInputText: {
    fontSize: RFValue(14),
    color: Colors.darkGreen,
    fontWeight: '700',
    fontFamily:fontFamily

  },
  mobileInput: {
    marginTop: RFValue(7),
    fontWeight: '700',
    borderRadius: RFValue(5),
  },
  otpStyle: {
    marginTop:RFValue(41),
    textAlign: 'center',
    fontSize: RFValue(20),
    fontWeight: '700',
    fontFamily:fontFamily,
    color: Colors.green,
    letterSpacing:0.4
  },
  otpMessage: {
    marginTop: RFValue(6),
    fontSize: RFValue(14),
    fontWeight: '700',
    color: Colors.darkGreen,
    fontFamily:fontFamily
  },
  secondsText:{
    marginTop: RFValue(7),
    fontSize: RFValue(12),
    fontWeight: '600',
    color: Colors.black,
    fontFamily:fontFamily,
    alignSelf:"flex-end"
  },
  otpNotRecieveContainer:{
    marginTop:RFValue(53),
    flexDirection:"row",
  },
  otpNotRecieve:{
    fontSize: RFValue(12),
    fontWeight: '700',
    color: Colors.darkGreen,
    fontFamily:fontFamily,
  },
  otpNotResend:{
    fontSize: RFValue(12),
    fontWeight: '700',
    color: Colors.black,
    fontFamily:fontFamily,
  },
  termsStyle:{
    marginTop:RFValue(200),
  },
  termsTextStyle:{
    fontSize: RFValue(12),
    fontWeight: '700',
    color: Colors.black,
    fontFamily:fontFamily,
  },
  buttonStyle:{
      marginTop:RFValue(22)
  }
})
