import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import React from 'react'
import { RFValue } from 'react-native-responsive-fontsize'
import { Colors, fontFamily } from '@/Theme/Variables'
import { Gutters } from '@/Theme'
import RadioForm from 'react-native-simple-radio-button'

const RadioInput = ({ active = false, onPress = () =>{}, id,name }) => {
  return (
    <TouchableOpacity
      style={styles.radioInputContainer(active)}
      onPress={() => onPress(id)}
    >
      <View style={styles.radioCircle}>
        {active ? <View style={styles.radioCircleActive} /> : null}
      </View>
      <Text style={styles.radioTitle(active)}>{name}</Text>
    </TouchableOpacity>
  )
}

export default RadioInput

const styles = StyleSheet.create({
  radioInputContainer: active => ({
    height: RFValue(69),
    width: '100%',
    backgroundColor: active ? Colors.green : Colors.primary,
    fontFamily: fontFamily,
    marginBottom: RFValue(28),
    borderRadius: RFValue(10),
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.green,
    borderWidth: RFValue(3),
    flexDirection: 'row',
  }),
  radioTitle: active => ({
    color: active ? Colors.primary : Colors.black,
    fontSize: RFValue(18),
    fontFamily: fontFamily,
    fontWeight: '700',
    textTransform: 'uppercase',
  }),
  radioCircle: {
    height: RFValue(28),
    width: RFValue(28),
    backgroundColor: Colors.primary,
    borderRadius: 50,
    borderColor: Colors.darkGreen,
    borderWidth: RFValue(2),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: RFValue(19),
  },
  radioCircleActive: {
    height: RFValue(18),
    width: RFValue(18),
    backgroundColor: Colors.green,
    borderRadius: 50,
  },
})
