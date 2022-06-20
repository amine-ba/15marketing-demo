// @ts-ignore
import styled from 'styled-components/native';

interface ContainerProps {
  bgColor: string;
}

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${(props: ContainerProps) => props.bgColor};
`;
