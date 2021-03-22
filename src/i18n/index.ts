import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import zhCN from './locales/zh_CN.json'

i18n.use(initReactI18next).init({
  lng: 'zh_CN',
  fallbackLng: 'zh_CN',
  resources: {
    zh_CN: {
      translation: zhCN,
    },
  },
  debug: false,
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
