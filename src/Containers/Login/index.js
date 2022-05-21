import { ScreenHOC } from '@/Components'
import CustomButton from '@/Components/Button'
import CustomTextInput from '@/Components/TextInput'
import { useTheme } from '@/Hooks'
import { Layout } from '@/Theme'
import React, { useCallback } from 'react'
import { View, Text, Image } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { styles } from './styles'
import BackArrow from '@/Assets/icons/BackArrow'

const LoginContainer = ({ navigation }) => {
  const handlePress = useCallback(() => {
    navigation.navigate('SelectRole')
  }, [])

  return (
    <ScreenHOC
      showHeader={true}
      showLeftIcon={true}
      backIconStyle={styles.backIconStyle}
      ShowTitle={true}
      titleText="Login"
      titleStyle={styles.titleStyle}
      navigation={navigation}
    >
      <KeyboardAwareScrollView>
        <View style={[Layout.fillDefault, styles.mainContainer]}>
          <View>
            <Text style={styles.otpStyle}>OTP</Text>
            <Text style={styles.otpMessage}>
              Enter the OTP recieved on your mobile.
            </Text>
          </View>
          <View style={styles.mobileInputContainer}>
            <Text style={styles.mobileInputText}>OTP</Text>
            <CustomTextInput
              _textInputStyles={styles.mobileInput}
              keyboardType="number-pad"
              placeholder="e.g 1234"
            />
            <Text style={styles.secondsText}>00:30 seconds left</Text>
          </View>
          <View style={styles.otpNotRecieveContainer}>
            <Text style={styles.otpNotRecieve}>Didn’t receive OTP?</Text>
            <Text style={styles.otpNotResend}>{' Resend Code'}</Text>
          </View>
          <View style={styles.termsStyle}>
            <Text style={styles.termsTextStyle}>By registering, I agree to the Xyz’s T&C</Text>
          </View>
          <CustomButton
            _title="Confirm"
            buttonStyles={[styles.buttonStyle]}
            onButtonPress={handlePress}
          />
        </View>
      </KeyboardAwareScrollView>
    </ScreenHOC>
  )
}

export default LoginContainer
