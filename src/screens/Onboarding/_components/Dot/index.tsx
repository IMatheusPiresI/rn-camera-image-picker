import { useTheme } from 'styled-components/native';
import React from 'react';
import Animated, {
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

import * as S from './styles';

type Props = {
  index: number;
  activeIndex: Animated.SharedValue<number>;
};

export const Dot: React.FC<Props> = ({ activeIndex, index }) => {
  const theme = useTheme();

  const rDotStyle = useAnimatedStyle(() => {
    const isActive = activeIndex.value === index;

    return {
      backgroundColor: withTiming(
        isActive ? theme.colors.salmon : theme.colors.gray,
      ),
      width: withTiming(isActive ? 25 : 8),
    };
  });

  return <S.Dot style={rDotStyle} />;
};
