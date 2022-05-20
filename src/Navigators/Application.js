import React from 'react'
import { SafeAreaView, StatusBar, I18nManager, Platform } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import { OtpScreen, Login } from '@/Containers'
import { useTheme } from '@/Hooks'
import MainNavigator from './Main'
import { navigationRef } from './utils'
import { getDeviceLang } from '@/Utilities/helper'
import SplashScreen from '@/Containers/SplashScreen'
import WalkThrough from '@/Containers/Walkthrough'

// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme()
  const { colors } = NavigationTheme
  const Stack = createStackNavigator()
  I18nManager.forceRTL(true)
  // if (Platform.OS === 'ios') {
  //   // if hebrew then rtl
  //   if (getDeviceLang() === 'he') {
  //     I18nManager.forceRTL(true)
  //   } else {
  //     I18nManager.forceRTL(false)
  //   }
  // }
  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
        <Stack.Navigator
          screenOptions={{ headerShown: false }}
          initialRouteName="SplashScreen"
        >
          <Stack.Screen name="SplashScreen" component={SplashScreen} />
          <Stack.Screen name="WalkThrough" component={WalkThrough} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="OtpScreen" component={OtpScreen} />
          {/* <Stack.Screen
            name="Main"
            component={MainNavigator}
            options={{
              animationEnabled: false,
            }}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default ApplicationNavigator
