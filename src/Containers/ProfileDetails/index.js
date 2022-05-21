import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { ScreenHOC } from '@/Components'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Layout } from '@/Theme'
import RadioInput from '@/Components/RadioInput'
import CustomButton from '@/Components/Button'
import { useTheme } from '@/Hooks'
import CameraIcon from '@/Assets/icons/Camera.svg'
import { RFValue } from 'react-native-responsive-fontsize'
import CustomTextInput from '@/Components/TextInput'
import { Colors } from '@/Theme/Variables'

const ProfileDetails = ({ navigation }) => {
  const { Images } = useTheme()
  const navigateToLocation = () => {
    navigation.navigate("LocationRequest")
  }
  return (
    <ScreenHOC
      showHeader={true}
      showLeftIcon={true}
      backIconStyle={styles.backIconStyle}
      headerStyle={styles.headerStyle}
      navigation={navigation}
      containerStyle={{ flex: 1 }}
    >
      <View style={[Layout.fillDefault, styles.mainContainer]}>
        <Text style={styles.details}>Enter your Personal Details</Text>
        <View style={styles.imgContainer}>
          <View>
            <View style={styles.cameraContainer}>
              <CameraIcon height={RFValue(23)} width={RFValue(31)} />
            </View>
            <Image
              style={styles.signUpImage}
              source={Images.profileImage}
              resizeMode="contain"
            />
          </View>
        </View>

        <Text style={styles.uploadText}>Upload your Profile Photo</Text>
        <CustomTextInput
          requiredIcon = {true}
          inputTitleHeader={'Full Name'}
          showInputHeader={true}
          placeholder="Prasad Singh"
          placeholderTextColor={Colors.green}
          _textInputStyles={styles._textInputStylesFull}
        />
        <CustomButton
          _title="Confirm"
          buttonStyles={[styles.buttonStyle]}
          onButtonPress={navigateToLocation}
        />
      </View>
    </ScreenHOC>
  )
}

export default ProfileDetails
