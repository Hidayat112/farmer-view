import React, { useState, useEffect } from 'react'
import {
  View,
  ActivityIndicator,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Clipboard
} from 'react-native'
import { useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { styles } from './styles'
import OTPInputView from '@twotalltotems/react-native-otp-input'
const OtpScreen = () => {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  console.log('Otp Screen')
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Otp Screen</Text>
      <OTPInputView
        style={{ width: '60%', height: 200 }}
        pinCount={4}
        autoFocusOnLoad={true}
        keyboardType="number-pad"
        codeInputFieldStyle={{ backgroundColor: 'green', borderRadius: 10 }}
        onCodeFilled={code => {
          console.log(`Code is ${code}, you are good to go!`)
        }}
        onCodeChanged={response => {
          console.log(response, 'response')
        }}
        placeholderCharacter={'*'}
      />
    </View>
  )
}

export default OtpScreen
