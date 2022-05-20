import { StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
export const styles = StyleSheet.create({
  loginButton: {
    backgroundColor: '#00C4FF',
    width: '100%',
    height: RFValue(56),
    borderRadius: 100,
    paddingTop: RFValue(2),
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    zIndex: 1,
    // // fontFamily: fontFamily,
  },
  loginButtonText: {
    color: 'white',
    fontSize: RFValue(20),
    // paddingHorizontal: windowWidth * 0.017,
    // marginTop: windowWidth * 0.027,
    fontFamily: 'NotoSansHebrew-Bold',
    // backgroundColor: 'red',
    // // fontFamily: fontFamily,
  },
})
