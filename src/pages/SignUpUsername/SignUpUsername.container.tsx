import { useNavigation } from '@react-navigation/native';
import { t } from 'i18next';
import { useState } from 'react';

import SignUpUsernameComponent from './SignUpUsername.component';

const SignUpUsernameContainer = (props: any) => {
  const [usernameInput, setUsernameInput] = useState<string>('');
  const navigation: any = useNavigation();

  const onChangeUsername = (text: string) => setUsernameInput(text);

  const onClickNext = () => navigation.navigate('SignUpUsername');

  const handledProps = { t, activeStep: 1, usernameInput, onChangeUsername, onClickNext };
  return <SignUpUsernameComponent {...handledProps} />;
};

export default SignUpUsernameContainer;
