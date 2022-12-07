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
  background-color: ${({ theme }) => theme.colors.black};
`;
export const ButtonOpacity = styled.TouchableOpacity``;
