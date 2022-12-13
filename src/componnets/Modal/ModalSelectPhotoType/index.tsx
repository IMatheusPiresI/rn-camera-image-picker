import React from 'react';
import Modal from 'react-native-modal';

import * as S from './styles';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from 'styled-components/native';

type Props = {
  isVisible: boolean;
  toogleVisibility: () => void;
};

export const ModalSelectPhotoType: React.FC<Props> = ({
  isVisible,
  toogleVisibility,
}) => {
  const theme = useTheme();

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={toogleVisibility}
      style={{
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        margin: 0,
      }}
      animationIn="slideInUp"
      animationInTiming={1200}
      animationOutTiming={1200}
    >
      <S.Container>
        <S.Header>
          <S.BackButton>
            <MaterialIcons
              name="arrow-back"
              size={32}
              color={theme.colors.salmon}
            />
          </S.BackButton>
          <S.TitleModal>Select Type Photo</S.TitleModal>
        </S.Header>
      </S.Container>
    </Modal>
  );
};
