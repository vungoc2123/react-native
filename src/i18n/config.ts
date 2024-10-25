import i18n, {ModuleType} from 'i18next';
import {initReactI18next} from 'react-i18next';
import {NativeModules, Platform} from 'react-native';
import translationEn from './en.json';
import translationVi from './vi.json';

const languageDetector = {
  type: 'languageDetector' as ModuleType,
  async: true,
  detect: (callback: any) => {
    const locale =
      Platform.OS === 'ios'
        ? NativeModules.SettingsManager.settings.AppleLocale ||
          NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
        : NativeModules.I18nManager.localeIdentifier;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const deviceLanguage = locale.split('_')[0];
    // callback(deviceLanguage.indexOf('vi') >= 0 ? 'vi' : 'en');
    callback('vi');
  },
  init: () => {},
  cacheUserLanguage: () => {},
};

export const resources = {
  en: {
    translation: translationEn,
  },
  vi: {
    translation: translationVi,
  },
} as const;

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });
export default i18n;
