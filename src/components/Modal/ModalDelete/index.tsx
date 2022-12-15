import React from 'react';

import * as S from './styles';

type Props = {
  isVisible: boolean;
  handleClose: () => void;
  handleDelete: () => void;
};

export const ModalDelete: React.FC<Props> = ({
  isVisible,
  handleClose,
  handleDelete,
}) => (
  <S.WrapperModal isVisible={isVisible} onBackdropPress={handleClose}>
    <S.Container>
      <S.WrapperTexts>
        <S.Title>Delete photos</S.Title>
        <S.Description>
          Deleted images cannot be recovered, are you sure you want to delete?
        </S.Description>
      </S.WrapperTexts>

      <S.WrapperActionButtons>
        <S.WrapperButton>
          <S.LongButton title="Cancel" variant="salmon" onPress={handleClose} />
        </S.WrapperButton>
        <S.WrapperButton>
          <S.LongButton
            title="Delete"
            variant="delete"
            onPress={handleDelete}
          />
        </S.WrapperButton>
      </S.WrapperActionButtons>
    </S.Container>
  </S.WrapperModal>
);
