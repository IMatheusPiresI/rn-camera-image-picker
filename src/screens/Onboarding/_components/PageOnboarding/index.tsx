import React from 'react';
import LottieView, { AnimationObject } from 'lottie-react-native';

import * as S from './styles';

type Props = {
  title: string;
  animation: AnimationObject;
  description: string;
  indexAnimation: number;
  activeIndex: number;
};

export const PageOnboarding: React.FC<Props> = ({
  title,
  animation,
  description,
}) => (
  <S.Container>
    <S.TitlePage>{title}</S.TitlePage>
    <S.ContainerAnimation>
      <LottieView source={animation} resizeMode="contain" autoPlay />
    </S.ContainerAnimation>
    <S.Description testID="description_onboarding">{description}</S.Description>
  </S.Container>
);
