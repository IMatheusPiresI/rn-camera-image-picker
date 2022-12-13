import React, { useCallback, useEffect, useState } from 'react';
import Modal from 'react-native-modal';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from 'styled-components/native';

import { CardPhotoType } from '../../CardPhotoType';
import { PhotoType, photoTypes } from '../../../mocks/photoTypes';

import * as S from './styles';

type Props = {
  isVisible: boolean;
  handleClose: () => void;
  setSelectedType: (newState: PhotoType) => void;
  selectedType: PhotoType | undefined;
};

export const ModalSelectPhotoType: React.FC<Props> = ({
  isVisible,
  handleClose,
  setSelectedType,
  selectedType,
}) => {
  const [photoTypeSelected, setPhotoTypeSelected] = useState<
    PhotoType | undefined
  >(selectedType);
  const theme = useTheme();

  const handleToogleType = (item: PhotoType) => {
    setPhotoTypeSelected(item);
  };

  const handleSetSelectedType = useCallback(() => {
    if (!photoTypeSelected) {
      return;
    }
    setSelectedType(photoTypeSelected);
    handleClose();
  }, [photoTypeSelected, setSelectedType, handleClose]);

  useEffect(() => {
    if (isVisible) {
      setPhotoTypeSelected(selectedType);
    }
  }, [isVisible]);

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={handleClose}
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
        <S.BackButton onPress={handleClose}>
          <MaterialIcons
            name="arrow-back"
            size={28}
            color={theme.colors.salmon}
          />
        </S.BackButton>
        <S.Header>
          <S.TitleModal>Select photo type</S.TitleModal>
          <S.DescriptionModal>
            Choose the type that best suits your photo.
          </S.DescriptionModal>
        </S.Header>

        <S.Content>
          <S.ListTypes
            data={photoTypes}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <CardPhotoType
                type={item.title}
                animation={item.animation}
                onPress={() => handleToogleType(item)}
                isActive={photoTypeSelected?.id === item.id}
              />
            )}
            numColumns={2}
            columnWrapperStyle={{
              justifyContent: 'space-around',
            }}
            ItemSeparatorComponent={() => <S.Separator />}
          />
        </S.Content>
        <S.Footer>
          <S.ButtonContinue
            disabled={photoTypeSelected ? false : true}
            onPress={handleSetSelectedType}
          >
            <S.TitleContinue>Select</S.TitleContinue>
          </S.ButtonContinue>
        </S.Footer>
      </S.Container>
    </Modal>
  );
};
