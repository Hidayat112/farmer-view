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
import { RFValue } from 'react-native-responsive-fontsize'
import { Colors } from '@/Theme/Variables'

const FarmerRegistration = ({ navigation }) => {
  const FullWidthOption = ['City', 'Address']
  const HalfWidthOption = [
    { first: 'Village', second: 'Post Office' },
    { first: 'Tehsil', second: 'Taluka' },
    { first: 'Zip Code', second: 'State' },
  ]

  const FullWidthOptionsRender = () =>
    FullWidthOption.map(item => (
      <CustomTextInput
        key={item}
        inputTitleHeader={item}
        showInputHeader={true}
        placeholder="Text Input"
        placeholderTextColor={Colors.green}
        _textInputStyles={styles._textInputStylesFull}
      />
    ))

  const HalfWidthOptionsRender = () =>
    HalfWidthOption.map((item, idx) => (
      <View key={idx} style={{ flex: 1, flexDirection: 'row' }}>
        <CustomTextInput
          inputTitleHeader={item.first}
          showInputHeader={true}
          placeholder="Text Input"
          placeholderTextColor={Colors.green}
          _textInputStyles={[
            styles._textInputStylesFull,
            { marginRight: RFValue(4) },
          ]}
        />
        <CustomTextInput
          inputTitleHeader={item.first}
          showInputHeader={true}
          placeholder="Text Input"
          placeholderTextColor={Colors.green}
          _textInputStyles={[
            styles._textInputStylesFull,
            { marginLeft: RFValue(4) },
          ]}
        />
      </View>
    ))

    const navigateToDetails = () => {
        navigation.navigate("ProfileDetails")
    }

  return (
    <ScreenHOC
      showHeader={true}
      showLeftIcon={true}
      backIconStyle={styles.backIconStyle}
      ShowTitle={true}
      titleText="Select Type"
      titleStyle={styles.titleStyle}
      navigation={navigation}
      containerStyle={{ flex: 1 }}
    >
      <KeyboardAwareScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={[Layout.fillDefault, styles.mainContainer]}>
          <View>
            <Text style={styles.registrationStyle}>Registration</Text>
            <Text style={styles.details}>Please fill in the details.</Text>
          </View>
          <View style={styles.inputContainers}>
            {FullWidthOptionsRender()}
            {HalfWidthOptionsRender()}
          </View>
          <CustomButton
            _title="Confirm"
            buttonStyles={[styles.buttonStyle]}
            onButtonPress={navigateToDetails}
          />
        </View>
      </KeyboardAwareScrollView>
    </ScreenHOC>
  )
}

export default FarmerRegistration
