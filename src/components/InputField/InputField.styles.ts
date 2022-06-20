// @ts-ignore
import styled from 'styled-components/native';

interface StyledInputProps {
  bgColor: string;
}

export const InputContainer = styled.View`
  align-items: center;
`;

export const StyledInput = styled.TextInput<StyledInputProps>`
  background-color: ${props => props.bgColor};
  margin-bottom: 4px;
  border-width: 1px;
  padding: 12px;
  width: 80%;
`;

export const Container = styled.View`
  justify-content: center;
  height: 100%;
  width: 100%;
`;
