import Box from '@components/Box';
import Button from '@components/Button';
import Container from '@components/Container';
import Field from '@components/Field';
import Header from '@components/Header';
import Text from '@components/Text';

type SignUpUsernameComponentProps = {
  t?: any;
  activeStep?: number;
  usernameInput?: string;
  onChangeUsername?: any;
  onClickNext?: () => any;
};

const SignUpUsernameComponent = ({
  t,
  activeStep,
  usernameInput,
  onChangeUsername,
  onClickNext,
}: SignUpUsernameComponentProps) => {
  return (
    <Container noPadding>
      <Header title={t?.('signUp')} activeStep={activeStep} />
      <Box ml="24px" mr="24px" crossCenter>
        <Box width="150px" height="150px" bgDisabled rounded />
        <Box width="150px" height="50px" mt="20px" bgDisabled rounded center>
          <Text>{t?.('upload')}</Text>
        </Box>
      </Box>
      <Box fill row crossCenter ml="24px" mr="24px" mb="200px">
        <Box fill>
          <Field
            label={t?.('username')}
            placeholder={t?.('usernamePlaceholder')}
            testID="username-input"
            value={usernameInput}
            onChange={onChangeUsername}
          />
        </Box>
      </Box>
      <Box ml="24px" mr="24px">
        <Button center testID="username-next" onPress={onClickNext}>
          <Text semiBold white buttonText>
            {t?.('next')}
          </Text>
        </Button>
      </Box>
    </Container>
  );
};

export default SignUpUsernameComponent;
