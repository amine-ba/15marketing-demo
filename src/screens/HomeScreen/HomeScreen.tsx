import React, {useCallback, useState} from 'react';
import {WebViewComponent, DialogModal, InputField} from '@components/index';
import {DEFAULT_LINK} from './constants';
import {Container} from './HomeScreen.styles';
import theme from '@shared/theme';

const HomeScreen = () => {
  const [accessWebView, setAccessWebView] = useState<boolean>(false);
  const [ModalVisible, setModalVisible] = useState<boolean>(false);
  const [url, setUrl] = useState<string>(DEFAULT_LINK);

  const Reset = useCallback(() => {
    setAccessWebView(false);
    setModalVisible(false);
  }, []);

  const hideModal = useCallback(() => {
    setModalVisible(false);
  }, []);

  const showDialogWindow = useCallback(() => {
    setModalVisible(true);
  }, []);

  const showWebView = useCallback(() => {
    setAccessWebView(true);
  }, []);

  const onChangeValue = useCallback(newtText => {
    setUrl(newtText);
  }, []);

  return (
    <Container bgColor={theme.colors.primary.white}>
      {!accessWebView && (
        <InputField
          url={url}
          onChangeValue={onChangeValue}
          showWebView={showWebView}
        />
      )}
      {accessWebView && (
        <WebViewComponent
          url={url}
          showDialogWindow={showDialogWindow}
          Reset={Reset}
        />
      )}
      <DialogModal ModalVisible={ModalVisible} hideModal={hideModal} />
    </Container>
  );
};

export default HomeScreen;
