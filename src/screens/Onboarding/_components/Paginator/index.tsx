import React from 'react';
import Animated from 'react-native-reanimated';

import { pages } from '../../../../mocks/pages';
import { Dot } from '../Dot';

import * as S from './styles';

type Props = {
  activeIndex: Animated.SharedValue<number>;
  qtyPages: number;
};

export const Paginator: React.FC<Props> = ({ activeIndex }) => (
  <S.Container>
    {pages.map((_, index) => (
      <Dot key={index} index={index} activeIndex={activeIndex} />
    ))}
  </S.Container>
);
