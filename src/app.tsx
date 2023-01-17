import { registerRootComponent } from 'expo';
import i18next from 'i18next';
import { Suspense } from 'react';
import { initReactI18next, useTranslation } from 'react-i18next';
import { View, Text } from 'react-native';

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: require('./translations/en'),
    },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: { escapeValue: true },
});

const App = () => {
  const { t } = useTranslation();
  return (
    <Suspense fallback="Loading...">
      <View>
        <Text>{t('sampleKey')}</Text>
      </View>
    </Suspense>
  );
};

export default registerRootComponent(App);