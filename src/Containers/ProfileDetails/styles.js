import { Colors, fontFamily, FontSize, windowHeight } from '@/Theme/Variables'
import { StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

export const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: 'row',
    width: '100%',
    marginTop: RFValue(32),
  },
  backIconStyle: {
    height: RFValue(20),
    width: RFValue(30),
  },
  details: {
    marginTop: RFValue(32),
    textAlign: 'center',
    fontSize: RFValue(20),
    fontWeight: '700',
    fontFamily: fontFamily,
    color: Colors.green,
    letterSpacing: 0.4,
  },
  mainContainer: {
    justifyContent: 'center',
    flex:1,
    marginHorizontal: RFValue(26)
  },
  imgContainer: {
    marginTop: RFValue(37),
    justifyContent: 'center',
    alignItems: 'center',
  },
  cameraContainer: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    zIndex: 2,
  },
  uploadText: {
    marginTop: RFValue(16),
    color: Colors.darkGreen,
    fontWeight: '700',
    fontFamily: fontFamily,
    textAlign:"center",
    marginBottom: RFValue(17),

  },
  _textInputStylesFull: {
    marginBottom: RFValue(15),
    borderRadius: RFValue(5),
    fontWeight: '700',
    width:"100%",
  },
  buttonStyle:{
    position:"absolute",
    bottom:RFValue(10),
    alignSelf:"center"
  }
})
