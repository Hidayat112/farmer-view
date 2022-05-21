import { ScreenHOC } from '@/Components'
import CustomButton from '@/Components/Button'
import { useTheme } from '@/Hooks'
import { Layout } from '@/Theme'
import React from 'react'
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native'
import { styles } from './styles'

const LocationRequest = ({ navigation }) => {
  const { Images } = useTheme()
  const navigateToCongrats = () => {
    navigation.navigate('Congrats')
  }

  return (
    <ScreenHOC containerStyle={{ flex: 1 }}>
      <ImageBackground
        resizeMode="cover"
        source={Images.sunnyMeadow}
        style={styles.mainContainer}
      >
        <Text style={styles.congratsMessage}>CONGRATULATIONS!</Text>
        <Text style={styles.farmerMessage}>You’re now a verified farmer.!</Text>
        <View style = {styles.buttonContainer}>
          <CustomButton
            onButtonPress={navigateToCongrats}
            _title="Continue"
            buttonStyles={[styles.buttonStyle]}
          />
        </View>
      </ImageBackground>
    </ScreenHOC>
  )
}

export default LocationRequest
