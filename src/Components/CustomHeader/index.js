import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackArrow from '@/Assets/icons/BackArrow'
import { RFValue } from 'react-native-responsive-fontsize'

const CustomHeader = ({
  titleStyle = {},
  headerStyle = {},
  backIconStyle = {},
  showLeftIcon = false,
  ShowTitle = false,
  titleText = '',
  navigation,
}) => {
  const goBack = () => {
    navigation?.goBack()
  }
  return (
    <View style={[styles.headerStyle, headerStyle]}>
      {true ? (
        <BackArrow onPress={goBack} style={backIconStyle} />
      ) : null}

      {ShowTitle ? <Text style={titleStyle}>{titleText}</Text> : null}
    </View>
  )
}

export default CustomHeader

const styles = StyleSheet.create({
  headerStyle: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: RFValue(26),
    marginTop: RFValue(32),
  },
})
