// @ts-ignore
import styled from 'styled-components/native';
import {Row} from '@shared/styles';

interface ModalViewProps {
  bgColor: string;
  shadowColor: string;
}

export const ModalView = styled.View<ModalViewProps>`
  margin: 20px;
  background-color: ${props => props.bgColor};
  border-radius: 20px;
  padding: 30px;
  align-items: center;
  shadow-color: ${props => props.shadowColor};
  shadow-offset: {
    width: 0px;
    height: 2px;
  }
  shadow-opacity: 0.25;
  shadow-radius: 4px;
  elevation: 5;
`;

export const ModalText = styled.Text`
  margin-bottom: 15px;
  text-align: center;
`;

export const ButtonsContainer = styled(Row)`
  padding-top: 8px;
  justify-content: space-between;
`;
