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
    alignItems: 'center',
    marginHorizontal: RFValue(14),
    flex: 1,
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

  locationText: {
    marginTop: RFValue(20),
    textAlign: 'center',
    fontSize: RFValue(20),
    fontWeight: '700',
    fontFamily: fontFamily,
    color: Colors.green,
    letterSpacing: 0.4,
  },

  locationInfo: {
    textAlign: 'left',
    fontSize: RFValue(16),
    fontWeight: '600',
    fontFamily: fontFamily,
    color: Colors.darkGreen,
    marginTop: RFValue(63),
  },
  buttonStyle: {
    flex:1,
    backgroundColor:Colors.primary,
    color:Colors.black
  },
  buttonContainers:{
    position:"absolute",
    bottom:RFValue(10),
    flexDirection:"row",
    marginHorizontal:RFValue(35),
  },
  skipButtonText: {
    color: Colors.green,
  },
  skipButtonContainer:{
    justifyContent:"center",
    flex:1,
  }

})
