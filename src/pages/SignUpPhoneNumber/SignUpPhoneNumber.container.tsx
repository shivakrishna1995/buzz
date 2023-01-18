import { useNavigation } from '@react-navigation/native';
import { t } from 'i18next';
import { useState } from 'react';

import SignUpPhoneNumberComponent from './SignUpPhoneNumber.component';

const SplashScreenContainer = (props: any) => {
  const [phoneInput, setPhoneInput] = useState<string>('');
  const navigation: any = useNavigation();

  const onChangePhoneNumber = (text: string) => setPhoneInput(text);

  const onClickNext = () => navigation.navigate('SignUpVerification');

  const handledProps = { t, activeStep: 0, phoneInput, onChangePhoneNumber, onClickNext };
  return <SignUpPhoneNumberComponent {...handledProps} />;
};

export default SplashScreenContainer;
