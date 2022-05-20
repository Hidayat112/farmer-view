import { Platform, NativeModules, Dimensions } from 'react-native'

export const windowWidth = Dimensions.get('window').width
export const windowHeight = Dimensions.get('window').height
export const getDeviceLang = () => {
  const appLanguage =
    Platform.OS === 'ios'
      ? NativeModules.SettingsManager.settings.AppleLocale ||
        NativeModules.SettingsManager.settings.AppleLanguages[0]
      : NativeModules.I18nManager.localeIdentifier

  return appLanguage.search(/-|_/g) !== -1
    ? appLanguage.slice(0, 2)
    : appLanguage
}

// export const phoneNoRegex = /^0(5[^7]|[2-4]|[8-9]|7[0-9])[0-9]{7}$/
export const phoneNoRegex = /^[0-9]*$/
export const israelPhoneCode = '+972'
// export const fontFamily =
//   getDeviceLang() === 'en' ? 'Noto Sans' : 'Noto Sans'
