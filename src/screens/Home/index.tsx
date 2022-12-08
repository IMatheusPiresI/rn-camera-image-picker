import React from 'react';
import LottieView from 'lottie-react-native';

import LikePhoto from '../../assets/animations/like-photo.json';

import * as S from './styles';

export const Home = () => {
  console.log('home');
  return (
    <S.Container>
      <S.Title>
        Wellcome{'\n'}
        To{'\n'}
        CamCropper
      </S.Title>
      <S.WrapperAnimation>
        <LottieView source={LikePhoto} autoPlay loop speed={0.5} />
      </S.WrapperAnimation>
      <S.ContainerOptions>
        <S.ButtonOpacity>
          <S.TitleButton>Take a Pickture</S.TitleButton>
        </S.ButtonOpacity>
        <S.ButtonOpacity>
          <S.TitleButton>My Gallery</S.TitleButton>
        </S.ButtonOpacity>
        <S.ButtonOpacity>
          <S.TitleButton>Liked</S.TitleButton>
        </S.ButtonOpacity>
      </S.ContainerOptions>
    </S.Container>
  );
};
