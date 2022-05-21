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
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: RFValue(12),
  },
  registrationStyle: {
    marginTop: RFValue(34),
    textAlign: 'center',
    fontSize: RFValue(20),
    fontWeight: '700',
    fontFamily: fontFamily,
    color: Colors.green,
    letterSpacing: 0.4,
  },
  details: {
    marginTop: RFValue(12),
    fontSize: RFValue(16),
    fontWeight: '700',
    color: Colors.darkGreen,
    fontFamily: fontFamily,
  },
  inputContainers: {
    width: '100%',
    marginTop: RFValue(62),
  },
  _textInputStylesFull: {
    flex: 1,
    marginBottom: RFValue(15),
    borderRadius: RFValue(5),
    fontWeight: '700',
  },
  buttonStyle: {
    alignSelf: 'center',
    marginTop: RFValue(100),
  },
})
