import { t } from 'i18next';

import SignUpPhoneNumberComponent from './SignUpPhoneNumber.component';

const SplashScreenContainer = (props: any) => {
  const handledProps = { t, activeStep: 0 };
  return <SignUpPhoneNumberComponent {...handledProps} />;
};

export default SplashScreenContainer;
