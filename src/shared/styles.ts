// @ts-ignore
import styled from 'styled-components/native';

interface FlexProps {
  justifyContent: string;
  alignItems: string;
}
interface CustomButtonProps {
  bgColor: string;
}
interface ButtonTextProps {
  textColor: string;
}

export const CenteredView = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const Flex = styled.View<FlexProps>`
  flex: 1;
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems};
`;

export const CustomButton = styled.Pressable<CustomButtonProps>`
  border-radius: 20px;
  padding: 10px;
  elevation: 2;
  background-color: ${props => props.bgColor};
`;

export const ButtonText = styled.Text<ButtonTextProps>`
  color: ${props => props.textColor};
  font-weight: bold;
  text-align: center;
`;
