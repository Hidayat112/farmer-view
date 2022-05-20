import { View, Text } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { styles } from './style'

const GradientHOC = ({ children }) => {
  return (
    <LinearGradient
      colors={['#0b296a', '#144395', '#1f5dc3']}
      style={styles.linearGradient}
    >
      {children}
    </LinearGradient>
  )
}

export default GradientHOC
