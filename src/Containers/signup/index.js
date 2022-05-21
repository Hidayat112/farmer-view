import CustomButton from '@/Components/Button'
import CustomTextInput from '@/Components/TextInput'
import { useTheme } from '@/Hooks'
import { Layout } from '@/Theme'
import React, { useCallback } from 'react'
import { View, Text, Image } from 'react-native'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { styles } from './styles'

const SignUpContainer = ({ navigation }) => {
  const { Images } = useTheme()

  const handlePress = useCallback(() => {
    navigation.navigate('login')
  },[])

  return (
    <KeyboardAwareScrollView>
      <View style={Layout.fillDefault}>
        <Image
          style={styles.signUpImage}
          source={Images.fieldImage}
          resizeMode="cover"
        />
        <View style={styles.mainContainer}>
          <Text style={styles.titleStyle}>Welcome!</Text>
          <Text style={styles.subtitleStyle}>
            Please enter your details to login
          </Text>
          <View style={styles.mobileInputContainer}>
            <Text style={styles.mobileInputText}>Mobile Number</Text>
            <CustomTextInput
              _textInputStyles={styles.mobileInput}
              keyboardType="number-pad"
              placeholder="e.g 1234567890"
            />
          </View>
          <CustomButton
            _title="Confirm"
            buttonStyles={[styles.buttonStyle]}
            onButtonPress={handlePress}
          />
        </View>
      </View>
    </KeyboardAwareScrollView>
  )
}

export default SignUpContainer
