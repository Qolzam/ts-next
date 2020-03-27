import NextI18Next from 'next-i18next'

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

export default NextI18NextInstance

/* Optionally, export class methods as named exports */
export const {
  appWithTranslation,
  withTranslation,
} = NextI18NextInstance