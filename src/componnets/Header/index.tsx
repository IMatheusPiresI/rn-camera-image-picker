import React, { ReactElement } from 'react';
import { useNavigation } from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import * as S from './styles';

type Props = {
  iconRight?: ReactElement;
};

export const Header: React.FC<Props> = ({ iconRight }) => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <S.Container>
      <S.ButtonOpacity onPress={handleGoBack}>
        <MaterialIcons name="arrow-back" size={28} color="white" />
      </S.ButtonOpacity>
      {iconRight}
    </S.Container>
  );
};
