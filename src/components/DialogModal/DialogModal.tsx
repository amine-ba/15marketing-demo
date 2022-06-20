import React, {memo} from 'react';
import {Modal} from 'react-native';
import {ButtonsContainer, ModalText, ModalView} from './DialogModal.styles';
import {ButtonText, CustomButton, Flex} from '@shared/styles';
import theme from '@shared/theme';
import {TextContent} from '@consts/index';

interface DialogModalProps {
  ModalVisible: boolean;
  hideModal: () => void;
}

const DialogModal = ({ModalVisible, hideModal}: DialogModalProps) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={ModalVisible}
      onRequestClose={hideModal}>
      <Flex justifyContent="center" alignItems="center">
        <ModalView
          bgColor={theme.colors.primary.white}
          shadowColor={theme.colors.primary.black}>
          <ModalText>{TextContent.DialogModal.title}</ModalText>
          <ButtonsContainer>
            <CustomButton
              bgColor={theme.colors.primary.blue}
              onPress={hideModal}>
              <ButtonText textColor={theme.colors.primary.white}>
                {TextContent.DialogModal.onAcceptText}
              </ButtonText>
            </CustomButton>
            <CustomButton
              bgColor={theme.colors.primary.red}
              onPress={hideModal}>
              <ButtonText textColor={theme.colors.primary.white}>
                {TextContent.DialogModal.onDeclineText}
              </ButtonText>
            </CustomButton>
          </ButtonsContainer>
        </ModalView>
      </Flex>
    </Modal>
  );
};

export default memo(DialogModal);
