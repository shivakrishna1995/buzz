import Box from '@components/Box';
import Button from '@components/Button';
import Container from '@components/Container';
import Field from '@components/Field';
import Header from '@components/Header';
import Text from '@components/Text';

type SignUpPhoneNumberComponentProps = {
  t?: any;
  activeStep?: number;
};

const SignUpPhoneNumberComponent = ({ t, activeStep }: SignUpPhoneNumberComponentProps) => {
  return (
    <Container noPadding>
      <Header title={t?.('signUp')} activeStep={activeStep} />
      <Box ml="24px" mr="24px">
        <Text semiBold h1>
          {t?.('whatsYourPhone')}
        </Text>
      </Box>
      <Box fill row crossCenter ml="24px" mr="24px">
        <Field leftIcon width="70px" label={t?.('country')} placeholder="+44" />
        <Box ml="20px" />
        <Box fill>
          <Field label={t?.('phoneNumber')} placeholder={t?.('phoneNumberPlaceholder')} />
        </Box>
      </Box>
      <Box ml="24px" mr="24px">
        <Button center>
          <Text semiBold white buttonText>
            {t?.('next')}
          </Text>
        </Button>
      </Box>
    </Container>
  );
};

export default SignUpPhoneNumberComponent;
