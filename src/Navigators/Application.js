import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import {
  Congrats,
  FarmerRegistration,
  LocationRequest,
  LoginContainer,
  ProfileDetails,
  SelectRole,
  SignUpContainer,
  StartupContainer,
} from '@/Containers'
import { useTheme } from '@/Hooks'
import MainNavigator from './Main'
import { navigationRef } from './utils'

const Stack = createStackNavigator()

// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme()
  const { colors } = NavigationTheme

  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="signup" component={SignUpContainer} />
          <Stack.Screen name="login" component={LoginContainer} />
          <Stack.Screen name="SelectRole" component={SelectRole} />
          <Stack.Screen
            name="FarmerRegistration"
            component={FarmerRegistration}
          />
          <Stack.Screen name="ProfileDetails" component={ProfileDetails} />
          <Stack.Screen name="LocationRequest" component={LocationRequest} />
          <Stack.Screen name="Congrats" component={Congrats} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  )
}

export default ApplicationNavigator
