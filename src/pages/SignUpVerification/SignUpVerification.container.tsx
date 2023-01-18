import { useNavigation } from '@react-navigation/native';
import { t } from 'i18next';

import SignUpVerificationComponent from './SignUpVerification.component';

const SignUpVerificationContainer = (props: any) => {
  const navigation: any = useNavigation();

  const onClickNext = () => navigation.navigate('SignUpUsername');

  const handledProps = { t, activeStep: 0, onClickNext };
  return <SignUpVerificationComponent {...handledProps} />;
};

export default SignUpVerificationContainer;
