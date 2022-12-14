import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: ${RFValue(50)}px;
  background-color: blue;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 ${RFValue(20)}px;
  background-color: ${({ theme }) => theme.colors.pink_light};
`;
export const ButtonOpacity = styled.TouchableOpacity``;

export const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: ${RFValue(22)}px;

  margin-left: ${RFValue(8)}px;

  font-family: ${({ theme }) => theme.fonts.POPPINS_BOLD};

  color: ${({ theme }) => theme.colors.salmon};

  top: 2px;
`;
