import { registerRootComponent } from 'expo';
import i18next from 'i18next';
import { Suspense } from 'react';
import { initReactI18next, useTranslation } from 'react-i18next';

import BuzzRoutes from './routes/BuzzRoutes';

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
  return (
    <Suspense fallback="Loading...">
      <BuzzRoutes />
    </Suspense>
  );
};

export default registerRootComponent(App);
