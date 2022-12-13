import React, { useEffect, useRef } from 'react';
import LottieView, { AnimationObject } from 'lottie-react-native';
import { TouchableOpacityProps } from 'react-native';
import {
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import { useTheme } from 'styled-components/native';

import * as S from './styles';

type Props = {
  type: string;
  animation: AnimationObject;
  isActive: boolean;
} & TouchableOpacityProps;

export const CardPhotoType: React.FC<Props> = ({
  type,
  animation,
  isActive,
  ...rest
}) => {
  const animateColor = useSharedValue(0);
  const LottieRef = useRef<LottieView>(null);
  const theme = useTheme();

  const rShadowBackground = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      animateColor.value,
      [0, 1],
      [theme.colors.black_25, theme.colors.transparent],
    );

    return {
      backgroundColor,
    };
  });

  const rTextColor = useAnimatedStyle(() => {
    const color = interpolateColor(
      animateColor.value,
      [0, 1],
      [theme.colors.gray, theme.colors.salmon],
    );

    return {
      color,
    };
  });

  useEffect(() => {
    if (isActive) {
      LottieRef.current?.play();
      animateColor.value = withTiming(1, {
        duration: 1000,
      });
    } else {
      LottieRef.current?.pause();
      animateColor.value = withTiming(0, {
        duration: 1000,
      });
    }
  }, [animateColor, isActive]);

  return (
    <S.Container {...rest}>
      <S.BoxRoundAnimation>
        <LottieView ref={LottieRef} source={animation} />
        <S.Shadow style={rShadowBackground} />
      </S.BoxRoundAnimation>
      <S.Type isActive={isActive} style={rTextColor}>
        {type}
      </S.Type>
    </S.Container>
  );
};
