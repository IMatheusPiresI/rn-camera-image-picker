import React from 'react';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components/native';

import * as S from './styles';

type Props = {
  label: string;
  textArea?: boolean;
} & TextInputProps;

export const Input: React.FC<Props> = ({
  label,
  textArea = false,
  ...rest
}) => {
  const theme = useTheme();

  return (
    <S.Container>
      <S.InputText
        placeholderTextColor={theme.colors.salmon}
        textArea={textArea}
        multiline={textArea}
        style={{
          textAlignVertical: textArea ? 'top' : 'center',
        }}
        {...rest}
      />
      <S.WrapperLabel>
        <S.Label>{label}</S.Label>
      </S.WrapperLabel>
    </S.Container>
  );
};
