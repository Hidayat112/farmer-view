import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  I18nManager,
} from 'react-native'
import React from 'react'
import { styles } from './style'
import { useTranslation } from 'react-i18next'
import { RFValue } from 'react-native-responsive-fontsize'

const ButtonSolid = ({
  containerStyle,
  textStyle,
  translatableText,
  onPress,
  isLoading,
  icon,
}) => {
  const { t } = useTranslation()
  return (
    <TouchableOpacity
      style={[styles.loginButton, containerStyle]}
      onPress={onPress}
    >
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <>
          <Text
            style={[
              styles.loginButtonText,
              { marginRight: RFValue(10) },
              textStyle,
            ]}
          >
            {t(translatableText)}
          </Text>
          {icon}
        </>
      )}
    </TouchableOpacity>
  )
}

export default ButtonSolid
