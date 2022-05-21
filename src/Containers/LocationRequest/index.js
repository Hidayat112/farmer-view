import { ScreenHOC } from '@/Components'
import { useTheme } from '@/Hooks'
import { Layout } from '@/Theme'
import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { Colors } from '@/Theme/Variables'
import LocationMarker from '@/Assets/icons/LocationMarker'
import CustomButton from '@/Components/Button'

const LocationRequest = ({ navigation }) => {
  const navigateToCongrats = () => {
    navigation.navigate('Congrats')
  }

  return (
    <ScreenHOC
      showHeader={true}
      showLeftIcon={true}
      backIconStyle={styles.backIconStyle}
      titleText="Select Type"
      titleStyle={styles.titleStyle}
      navigation={navigation}
      containerStyle={{ flex: 1 }}
    >
      <View style={[Layout.fillDefault, styles.mainContainer]}>
        <LocationMarker height="53" width="40" />
        <Text style={styles.locationText}>Location Permission</Text>
        <Text style={styles.locationInfo}>
          To collect location details of your device to detect and autofill data
          during the process of order creation.{' '}
        </Text>
        <View style={styles.buttonContainers}>
          <TouchableOpacity
            style={styles.skipButtonContainer}
            onPress={navigateToCongrats}
          >
            <Text style={styles.skipButtonText}>Skip</Text>
          </TouchableOpacity>
          <CustomButton
            onButtonPress={navigateToCongrats}
            _title="Grant"
            buttonStyles={[styles.buttonStyle]}
          />
        </View>
      </View>
    </ScreenHOC>
  )
}

export default LocationRequest
