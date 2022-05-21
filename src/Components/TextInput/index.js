import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import { Colors, fontFamily } from '@/Theme/Variables'
import { Gutters } from '@/Theme'

const CustomTextInput = props => {
  const {
    _textInputStyles = {},
    placeholderTextColor = '#6CAC4E80',
    keyboardType = 'default',
    placeholder = '',
    inputTitleHeader = '',
    showInputHeader = false,
    requiredIcon = false,
  } = props
  return (
    <View style={styles.container}>
      {showInputHeader ? (
        <View
          style={requiredIcon ? styles.StarContainer : styles.headingContainer}
        >
          {requiredIcon ? <Text style={styles.star}>*</Text> : null}
          <Text style={styles.heading}>{inputTitleHeader}</Text>
        </View>
      ) : null}
      <TextInput
        keyboardType={keyboardType}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        style={[styles.textInput, _textInputStyles]}
        {...props}
      />
    </View>
  )
}

export default CustomTextInput

const styles = StyleSheet.create({
  textInput: {
    borderColor: '#6CAC4E',
    borderWidth: RFValue(2),
    height: RFValue(46),
    width: '100%',
    backgroundColor: '#EFEFE7',
    color: Colors.inputBackground,
    fontFamily: fontFamily,
    paddingHorizontal: RFValue(14),
  },
  container: {
    flex: 1,
  },
  headingContainer: {
    position: 'absolute',
    zIndex: 3,
  },
  StarContainer: {
    flexDirection: 'row',
    position: 'absolute',
    zIndex: 3,
  },
  heading: {
    position: 'absolute',
    zIndex: 2,
    backgroundColor: Colors.primary,
    top: RFValue(-10),
    left: RFValue(15),
    color: Colors.darkGreen,
    fontWeight: '700',
    fontSize: RFValue(16),
  },
  star: {
    position: 'absolute',
    zIndex: 3,
    backgroundColor: Colors.primary,
    top: RFValue(-10),
    left: RFValue(87),
    color: 'red',
    fontWeight: '700',
    fontSize: RFValue(16),
  },
})
