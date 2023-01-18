import { render, fireEvent } from '@testing-library/react-native';
import { t } from 'i18next';

import SplashScreen from './SplashScreen.component';

describe('SplashScreen', () => {
  const props = {
    onClickSignUp: () => true,
  };
  test('Should render the SplashScreen screen', () => {
    render(<SplashScreen t={t} onClickSignUp={props.onClickSignUp} />);
  });
  test('Should Signup button clickable', async () => {
    const screen = render(<SplashScreen t={t} onClickSignUp={() => {}} />);
    const signUpButton = await screen.findByTestId('splashscreen-signup');
    fireEvent.press(signUpButton);
  });
});
