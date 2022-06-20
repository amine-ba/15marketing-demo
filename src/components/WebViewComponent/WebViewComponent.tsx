import React, {memo} from 'react';
import theme from '@shared/theme';
import {TextContent} from '@consts/index';
import {Button} from 'react-native';
import WebView from 'react-native-webview';
import {WebViewContainer, Container} from './WebViewComponent.styles';

interface WebViewComponentProps {
  url: string;
  showDialogWindow: () => void;
  Reset: () => void;
}

const WebViewComponent = ({
  url,
  showDialogWindow,
  Reset,
}: WebViewComponentProps) => {
  return (
    <Container>
      <WebViewContainer>
        <WebView source={{uri: url}} onLoad={showDialogWindow} />
      </WebViewContainer>

      <Button
        onPress={Reset}
        title={TextContent.HomeScreen.reset}
        color={theme.colors.primary.purple}
      />
    </Container>
  );
};

export default memo(WebViewComponent);
