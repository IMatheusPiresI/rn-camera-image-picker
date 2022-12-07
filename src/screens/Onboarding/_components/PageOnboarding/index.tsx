import React from 'react';
import LottieView, { AnimationObject } from 'lottie-react-native';

import * as S from './styles';

type Props = {
  title: string;
  animation: AnimationObject;
  autoPlay?: boolean;
  description: string;
};

export const PageOnboarding: React.FC<Props> = ({
  title,
  animation,
  description,
}) => (
  <S.Container>
    <S.TitlePage>{title}</S.TitlePage>
    <S.ContainerAnimation>
      <LottieView
        source={animation}
        autoPlay
        cacheComposition={true}
        loop
        resizeMode="contain"
      />
    </S.ContainerAnimation>
    <S.Description>{description}</S.Description>
  </S.Container>
);
