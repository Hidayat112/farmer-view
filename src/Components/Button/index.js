import { Colors, fontFamily } from '@/Theme/Variables'
import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

function CustomButton({
  _title = '',
  buttonStyles = [],
  buttonTextStyles = {},
  onButtonPress = () => {},
}) {
  return (
    <TouchableOpacity
      style={[styles.buttonDefault, ...buttonStyles]}
      activeOpacity={1}
      onPress={onButtonPress}
    >
      <Text style={[styles.buttonText, buttonTextStyles]}>{_title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  buttonDefault: {
    borderColor: '#026937',
    borderRadius: RFValue(5),
    borderWidth: RFValue(3),
    height: RFValue(51),
    width: '100%',
    backgroundColor: '#6CAC4E80',
    color: Colors.black,
    fontFamily: fontFamily,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
  },
  buttonText: {
    color: Colors.black,
    fontWeight: '700',
    fontFamily: fontFamily,
  },
})

export default CustomButton
