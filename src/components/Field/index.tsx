import Box from '@components/Box';
import Text from '@components/Text';
import styled from 'styled-components/native';

type FieldPropTypes = {
  label?: string;
  value?: string;
  placeholder?: string;
  width?: string;
  leftIcon?: boolean;
};

const FieldWrapper = styled.View<{ width?: string }>`
  flex-direction: column;
  ${({ width }: any) => width && `width: ${width}`};
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }: any) => theme?.color?.disabled};
`;

const Input = styled.TextInput`
  padding-bottom: 15px;
  font-size: 20px;
`;

const Field = ({ label, placeholder, width, leftIcon }: FieldPropTypes) => {
  return (
    <FieldWrapper width={width}>
      <Box mb="13px">
        <Text semiBold>{label}</Text>
      </Box>
      <Box row>
        {leftIcon && (
          <Box mt="5px" mr="5px">
            <Text>🇬🇧</Text>
          </Box>
        )}
        <Input placeholder={placeholder} />
      </Box>
    </FieldWrapper>
  );
};

export default Field;
