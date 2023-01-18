import { t } from 'i18next';
import { render, RenderAPI } from 'react-native-testing-library';

import SignUpVerification from './SignUpVerification.component';

jest.mock('@twotalltotems/react-native-otp-input', () => ({
  __esModule: true,
  default: () => {
    return null;
  },
}));

describe('SignUpVerification', () => {
  const phoneNumber = '7496358967';

  test('Should render the SignUpVerification screen', () => {
    const screen: RenderAPI = render(
      <SignUpVerification t={t} activeStep={0} onClickNext={jest.fn()} />
    );
    expect(screen).toBeDefined();
  });

  test('Should be able to click Next button', async () => {
    const screen: RenderAPI = render(
      <SignUpVerification t={t} activeStep={0} onClickNext={jest.fn()} />
    );
    const nextButton = await screen.getByTestId('otp-next');
    expect(nextButton).toBeDefined();
  });
});
