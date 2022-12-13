import React, { useState } from 'react';
import { Platform } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import LottieView from 'lottie-react-native';

import { Header } from '../../componnets/Header';
import Click from '../../assets/animations/click.json';
import { ModalSelectPhotoType } from '../../componnets/Modal/ModalSelectPhotoType';
import { Input } from '../../componnets/Input';

import * as S from './styles';

export const PhotoTypeSeparate = () => {
  const routes = useRoute();
  const navigation = useNavigation();
  const [isVisible, setIsVisible] = useState(false);
  const [typeSelected] = useState('none');

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

  const toogleVisibility = () => {
    setIsVisible(!isVisible);
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
          <Input label="Title photo" placeholder="Title..." />
        </S.WrapperInput>
        <S.WrapperInput>
          <Input label="Description" placeholder="Description..." textArea />
        </S.WrapperInput>
        <S.ContainerTypes>
          <S.WrapperTypeSelect>
            <S.TextType>Selected type:</S.TextType>
            <S.TextTypeSelected>{typeSelected}</S.TextTypeSelected>
          </S.WrapperTypeSelect>
          <S.WrapperLottieTypeSelected>
            <S.WrapperAnimationType>
              <S.RoundViewAnimation onPress={toogleVisibility}>
                <LottieView source={Click} autoPlay loop />
              </S.RoundViewAnimation>
            </S.WrapperAnimationType>
          </S.WrapperLottieTypeSelected>
        </S.ContainerTypes>
      </S.WrapperContent>

      <S.WrapperButton>
        <S.ButtonContinue>
          <S.ButtonContinueTitle>CONTINUE</S.ButtonContinueTitle>
        </S.ButtonContinue>
      </S.WrapperButton>
      <ModalSelectPhotoType
        isVisible={isVisible}
        toogleVisibility={toogleVisibility}
      />
    </S.Container>
  );
};
