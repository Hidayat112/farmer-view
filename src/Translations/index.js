import { getDeviceLang } from '@/Utilities/helper'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import * as resources from './resources'

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  resources: {
    ...Object.entries(resources).reduce(
      (acc, [key, value]) => ({
        ...acc,
        [key]: {
          translation: value,
        },
      }),
      {},
    ),
  },
  // lng: getDeviceLang(),
  lng: 'he'
})

export default i18n
