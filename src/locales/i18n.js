const NextI18Next = require('next-i18next').default

const NextI18NextInstance = new NextI18Next({
  defaultLanguage: 'en',
  otherLanguages: ['en', 'zh', 'vi'],
  fallbackLng: 'en',
  // have a common namespace used around the full app
  ns: ['common'],
  defaultNS: 'common',
  preload: ['en', 'zh', 'vi'],
  debug: false,
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
})

exports["default"] = NextI18NextInstance
exports.appWithTranslation = NextI18NextInstance.appWithTranslation
exports.withTranslation = NextI18NextInstance.withTranslation
exports.i18n = NextI18NextInstance.i18n
