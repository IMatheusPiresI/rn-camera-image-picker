import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import * as S from './styles';

type Props = {
  title: string;
  variant?: 'salmon' | 'delete';
  disabled?: boolean;
} & TouchableOpacityProps;

export const Button: React.FC<Props> = ({
  title,
  variant,
  disabled,
  ...rest
}) => (
  <S.Container {...rest} variant={variant} disabled={disabled}>
    <S.Title variant={variant} disabled={disabled}>
      {title}
    </S.Title>
  </S.Container>
);
