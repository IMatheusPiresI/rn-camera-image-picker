import React, { useState } from 'react';
import { Platform } from 'react-native';
import {
  StackActions,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { useDispatch } from 'react-redux';
import uuid from 'react-native-uuid';

import { Header } from '../../components/Header';
import Click from '../../assets/animations/click.json';
import { ModalSelectPhotoType } from '../../components/Modal/ModalSelectPhotoType';
import { Input } from '../../components/Input';
import { PhotoType } from '../../mocks/photoTypes';
import { Button } from '../../components/Button';
import { AddPhoto } from '../../store/modules/gallery/actions';

import * as S from './styles';

export const PhotoTypeSeparate = () => {
  const routes = useRoute();
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(false);
  const [selectedType, setSelectedType] = useState<PhotoType | undefined>(
    undefined,
  );
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const { imagePhoto } = routes.params as {
    imagePhoto: {
      path: string;
    };
  };

  const handlePhotoView = () => {
    navigation.navigate('PhotoView', {
      imagePath: imagePhoto.path,
    });
  };

  const handleCloseModal = () => {
    setIsVisible(false);
  };

  const handleOpenModal = () => {
    setIsVisible(true);
  };

  const handleAddImageToGallery = () => {
    if (!selectedType) return;

    dispatch(
      AddPhoto({
        idGallery: selectedType?.id,
        idImage: String(uuid.v4()),
        title: title,
        desc: description,
        path: imagePhoto.path,
      }),
    );

    navigation.dispatch(StackActions.replace('Gallery'));
  };

  return (
    <S.Container behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Header />
      <S.PhotoContainer>
        <S.ButtonImageWrapper onPress={handlePhotoView}>
          <S.ImagePhoto
            source={{
              uri: imagePhoto.path,
            }}
            resizeMode="cover"
          />
        </S.ButtonImageWrapper>
      </S.PhotoContainer>

      <S.WrapperContent>
        <S.WrapperInput>
          <Input
            label="Title photo"
            placeholder="Title..."
            value={title}
            onChangeText={setTitle}
          />
        </S.WrapperInput>
        <S.WrapperInput>
          <Input
            label="Description"
            placeholder="Description..."
            textArea
            value={description}
            onChangeText={setDescription}
          />
        </S.WrapperInput>
        <S.ContainerTypes>
          <S.WrapperTypeSelect>
            <S.TextType>Selected type:</S.TextType>
            <S.TextTypeSelected>
              {selectedType?.title ?? 'none'}
            </S.TextTypeSelected>
          </S.WrapperTypeSelect>
          <S.WrapperLottieTypeSelected>
            <S.WrapperAnimationType>
              <S.RoundViewAnimation onPress={handleOpenModal}>
                <LottieView
                  source={selectedType?.animation ?? Click}
                  autoPlay
                  loop
                />
              </S.RoundViewAnimation>
            </S.WrapperAnimationType>
          </S.WrapperLottieTypeSelected>
        </S.ContainerTypes>
      </S.WrapperContent>

      <S.Footer>
        <Button
          title="Continue"
          disabled={selectedType === undefined}
          onPress={handleAddImageToGallery}
        />
      </S.Footer>
      <ModalSelectPhotoType
        isVisible={isVisible}
        handleClose={handleCloseModal}
        setSelectedType={setSelectedType}
        selectedType={selectedType}
      />
    </S.Container>
  );
};
