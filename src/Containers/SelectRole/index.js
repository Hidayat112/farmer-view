import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { ScreenHOC } from '@/Components'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Layout } from '@/Theme'
import RadioInput from '@/Components/RadioInput'
import CustomButton from '@/Components/Button'

const SelectRole = ({ navigation }) => {
  const [activeIndex, setActiveIndex] = useState(null)
  const OPTIONS_ARRAY = ['Farmer', 'Buyer', 'Dealer', 'Retailer']
  const handleOptionPress = idx => {
    setActiveIndex(idx)
  }
  const RadioButtons = () => {
    return OPTIONS_ARRAY.map((item, idx) => {
      return (
        <RadioInput
          key={idx}
          active={idx == activeIndex}
          onPress={handleOptionPress}
          name={item}
          id={idx}
        />
      )
    })
  }

  const navigateToFarmer = () => {
    navigation.navigate('FarmerRegistration')
  }
  return (
    <ScreenHOC containerStyle={{ flex: 1 }}>
      <View style={[Layout.fillDefault, styles.mainContainer]}>
        <Text style={styles.roleTextStyle}>What’s your Role?</Text>
        <Text style={styles.roleMessageStyle}>
          Please select your occupation
        </Text>
        <View style={styles.buttonsContainer}>{RadioButtons()}</View>
        <CustomButton
          _title="Confirm"
          buttonStyles={[styles.buttonStyle]}
          onButtonPress={navigateToFarmer}
        />
      </View>
    </ScreenHOC>
  )
}

export default SelectRole
