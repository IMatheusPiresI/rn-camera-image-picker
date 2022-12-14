import React, { ReactElement } from 'react';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from 'styled-components/native';

import * as S from './styles';

type Props = {
  iconRight?: ReactElement;
  title?: string;
};

export const Header: React.FC<Props> = ({ iconRight, title }) => {
  const theme = useTheme();
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <S.Container>
      <S.Wrapper>
        <S.ButtonOpacity onPress={handleGoBack}>
          <MaterialIcons
            name="arrow-back"
            size={28}
            color={theme.colors.salmon}
          />
        </S.ButtonOpacity>
        <S.Title>{title}</S.Title>
      </S.Wrapper>
      {iconRight}
    </S.Container>
  );
};
