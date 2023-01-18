import Text from '@components/Text';
import AntDesign from '@expo/vector-icons/AntDesign';
import styled from 'styled-components/native';

type HeaderPropTypes = {
  title?: string;
  activeStep?: number;
};

const HeaderWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 50px 0 16px;
  height: 80px;
`;

const IconWrapper = styled.View`
  width: 33px;
  height: 33px;
  justify-content: center;
  align-items: center;
  border-radius: 33px;
  background-color: ${({ theme }: any) => theme?.color?.disabled};
`;

const HeaderBody = styled.View`
  width: 70%;
  height: 50px;
  margin: 0 auto;
  align-items: center;
`;

const StepsWrapper = styled.View`
  flex-direction: row;
  margin-top: 8px;
`;

const Step: any = styled.View`
  flex: 1;
  margin-right: 10px;
  height: 5.2px;
  background-color: ${({ theme, active }: any) =>
    active ? theme?.color.primary : theme?.color.disabled};
  border-radius: 6px;
`;

const Header = (props: HeaderPropTypes) => {
  return (
    <HeaderWrapper>
      <IconWrapper>
        <AntDesign name="left" size={18} />
      </IconWrapper>
      <HeaderBody>
        <Text semiBold h6>
          {props?.title}
        </Text>
        {typeof props?.activeStep === 'number' && (
          <StepsWrapper>
            {[...new Array(3).keys()].map((item) => (
              <Step key={item} active={(props?.activeStep || 0) >= item} />
            ))}
          </StepsWrapper>
        )}
      </HeaderBody>
    </HeaderWrapper>
  );
};

export default Header;
