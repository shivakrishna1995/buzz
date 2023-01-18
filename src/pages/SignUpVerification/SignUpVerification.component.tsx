import Box from '@components/Box';
import Button from '@components/Button';
import Container from '@components/Container';
import Header from '@components/Header';
import Text from '@components/Text';
import OTPInputView from '@twotalltotems/react-native-otp-input';

type SignUpPhoneNumberComponentProps = {
  t?: any;
  activeStep?: number;
  onClickNext: () => object;
};

const SignUpVerificationComponent = ({
  t,
  activeStep,
  onClickNext,
}: SignUpPhoneNumberComponentProps) => {
  return (
    <Container noPadding>
      <Header title={t?.('signUp')} activeStep={activeStep} />
      <Box ml="24px" mr="24px">
        <Text semiBold h1>
          {t?.('verifyNumber')}
        </Text>
        <Box height="10px" />
        <Text>{t?.('verifyNumberDescription')}</Text>
        <Box height="4px" />
        <Text semiBold>+44 124 2412 23</Text>
      </Box>
      <Box fill col crossCenter mainCenter ml="24px" mr="24px">
        <OTPInputView
          pinCount={4}
          autoFocusOnLoad
          style={{ width: '90%', height: 100 }}
          codeInputFieldStyle={{
            width: 50,
            height: 45,
            borderWidth: 0,
            borderBottomWidth: 1,
            borderBottomColor: 'grey',
          }}
        />
        <Box row>
          <Text>{t('didntGetOtpText')}</Text>
          <Text primary semiBold>
            {t('resendIn')}
          </Text>
        </Box>
      </Box>
      <Box ml="24px" mr="24px">
        <Button center testID="otp-next" onPress={onClickNext}>
          <Text semiBold white buttonText>
            {t?.('next')}
          </Text>
        </Button>
      </Box>
    </Container>
  );
};

export default SignUpVerificationComponent;
