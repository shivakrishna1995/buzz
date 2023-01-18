import { t } from 'i18next';
import { render, RenderAPI, fireEvent } from 'react-native-testing-library';

import SignUpUsername from './SignUpUsername.component';

describe('SignUpUsername', () => {
  const username = 'abcdefgh';

  test('Should render the SignUpUsername screen', () => {
    const screen: RenderAPI = render(<SignUpUsername t={t} />);
    expect(screen).toBeDefined();
  });

  test('Should be able to use user name input', async () => {
    const screen: RenderAPI = render(<SignUpUsername t={t} />);
    const usernameInput = await screen.getByTestId('username-input');
    expect(usernameInput).toBeDefined();
  });

  test('Should be able to click Next button', async () => {
    const screen: RenderAPI = render(<SignUpUsername t={t} onClickNext={jest.fn()} />);
    const nextButton = await screen.getByTestId('username-next');
    expect(nextButton).toBeDefined();
  });
});
