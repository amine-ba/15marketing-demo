import React, {memo} from 'react';
import {Button} from 'react-native';
import {Container, InputContainer, StyledInput} from './InputField.styles';
import theme from '@shared/theme';
import {TextContent} from '@consts/index';

interface InputFieldProps {
  url: string;
  onChangeValue: (newText: string) => void;
  showWebView: () => void;
}

const InputField = ({url, onChangeValue, showWebView}: InputFieldProps) => {
  return (
    <Container>
      <InputContainer>
        <StyledInput
          bgColor={theme.colors.primary.white}
          onChangeText={onChangeValue}
          value={url}
        />
        <Button
          onPress={showWebView}
          title={TextContent.InputComponent.buttonText}
          color={theme.colors.primary.purple}
        />
      </InputContainer>
    </Container>
  );
};

export default memo(InputField);
