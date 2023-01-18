import { t } from 'i18next';
import { render, RenderAPI, fireEvent } from 'react-native-testing-library';

import SignUpPhoneNumber from './SignUpPhoneNumber.component';

describe('SignUpPhoneNumber', () => {
  const phoneNumber = '7496358967';

  test('Should render the SignUpPhoneNumber screen', () => {
    const screen: RenderAPI = render(<SignUpPhoneNumber t={t} onChangePhoneNumber={jest.fn()} />);
    expect(screen).toBeDefined();
  });

  test('Should be able to use phone number input', async () => {
    const screen: RenderAPI = render(
      <SignUpPhoneNumber
        t={t}
        onChangePhoneNumber={(text: string) => {
          expect(text).toEqual(phoneNumber);
        }}
      />
    );
    const phoneInput = await screen.getByTestId('phonenumber-input');
    expect(phoneInput).toBeDefined();
    fireEvent.changeText(phoneInput, phoneNumber);
  });

  test('Should be able to click Next button', async () => {
    const screen: RenderAPI = render(
      <SignUpPhoneNumber t={t} onChangePhoneNumber={jest.fn()} onClickNext={jest.fn()} />
    );
    const nextButton = await screen.getByTestId('phonenumber-next');
    expect(nextButton).toBeDefined();
  });
});
