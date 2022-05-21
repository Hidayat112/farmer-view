import { Colors } from '@/Theme/Variables'
import React from 'react'
import {
  Text,
  View,
  SafeAreaView,
  StatusBar,
  ImageBackground,
  Dimensions,
  StyleSheet,
} from 'react-native'
import { connect } from 'react-redux'
import CustomHeader from '../CustomHeader'

const ScreenHOC = ({
  containerStyle={},
  showHeader = false,
  children,
  headerStyle={},
  showLeftIcon=false,
  ShowTitle=false,
  titleText="",
  backIconStyle={},
  titleStyle={},
  navigation,
}) => {
  return (
    <View style={[styles.baseContainer]}>
      {!!showHeader && (
        <CustomHeader
          headerStyle={headerStyle}
          showLeftIcon={showLeftIcon}
          ShowTitle={ShowTitle}
          titleText={titleText}
          backIconStyle={backIconStyle}
          titleStyle={titleStyle}
          navigation={navigation}
        />
      )}
      <View style={containerStyle}>{children}</View>
    </View>
  )
}

const styles = StyleSheet.create({
  baseContainer: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
})

export default ScreenHOC
