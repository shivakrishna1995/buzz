import { useTranslation } from 'react-i18next';
import SplashScreenComponent from './SplashScreen.component';

const SplashScreenContainer = (props: any) => {
  const { t } = useTranslation();

  const handledProps = { t };
  return <SplashScreenComponent {...handledProps} />;
};

export default SplashScreenContainer;
