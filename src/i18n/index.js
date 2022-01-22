import I18n, {getLanguages} from 'react-native-i18n';
import en from './en';

I18n.fallbacks = true;

I18n.translations = {
  en,
};

I18n.defaultLocale = 'en';
I18n.locale = 'en';
I18n.currentLocale();

getLanguages()
  .then(languages => {
    console.log('get Languages', languages);
  })
  .catch(err => {
    console.log('get Languages error : ', error);
  });

export default I18n;