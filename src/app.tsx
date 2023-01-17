import { registerRootComponent } from 'expo';
import { Suspense } from 'react';
import BuzzRoutes from '@routes/BuzzRoutes';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeProvider } from 'styled-components/native';
import * as theme from '@config/theme';
import './config/i18n';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Suspense fallback="Loading...">
        <ThemeProvider theme={theme}>
          <BuzzRoutes />
        </ThemeProvider>
      </Suspense>
    </GestureHandlerRootView>
  );
};

export default registerRootComponent(App);
