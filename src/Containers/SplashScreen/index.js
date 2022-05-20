import { View, Text } from 'react-native'
import React from 'react'
import Splash from 'react-native-splash-screen'
const SplashScreen = ({ navigation }) => {
  React.useEffect(() => {
    Splash.hide()
    navigation.navigate('WalkThrough')
  }, [])
  return null
}
export default SplashScreen
