import { useNavigation } from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import SplashScreenComponent from './SplashScreen.component';

const SplashScreenContainer = (props: any) => {
  const { t } = useTranslation();
  const navigation: any = useNavigation();

  const onClickSignUp = () => navigation.navigate('SignUpPhoneNumber');

  const handledProps = { t, onClickSignUp };
  return <SplashScreenComponent {...handledProps} />;
};

export default SplashScreenContainer;
