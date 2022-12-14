import React from 'react';
import { AnimationObject } from 'lottie-react-native';

import { CardPhotoType } from '../CardPhotoType';

import * as S from './styles';

type Props = {
  isActive: boolean;
  animation: AnimationObject;
};

export const CardGallery: React.FC<Props> = ({ isActive, animation }) => {
  console.log('a');

  return (
    <S.Container>
      <S.LastImage />
      <S.ShadowWrapper>
        <CardPhotoType isActive={isActive} animation={animation} />
      </S.ShadowWrapper>
    </S.Container>
  );
};
