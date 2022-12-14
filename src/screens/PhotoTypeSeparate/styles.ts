import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const PhotoContainer = styled.View`
  height: ${RFValue(180)}px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.shape};
`;

export const ButtonImageWrapper = styled.TouchableOpacity`
  width: ${RFValue(220)}px;
  height: ${RFValue(160)}px;
  background-color: red;
  align-items: center;
  justify-content: center;
  border-radius: ${RFValue(10)}px;
  overflow: hidden;
  elevation: 5;
  shadow-color: ${({ theme }) => theme.colors.pink_light};

  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.pink_light};
`;

export const ImagePhoto = styled.Image`
  width: 100%;
  height: 100%;
`;

export const ContainerSelect = styled.View`
  flex: 1;
  background: blue;
`;

export const WrapperContent = styled.ScrollView.attrs({
  contentContainerStyle: {
    padding: RFValue(20),
  },
})`
  background-color: ${({ theme }) => theme.colors.pink_light};
`;

export const ContainerTypes = styled.View`
  flex: 1;

  border-width: ${RFValue(1)}px;
  border-radius: ${RFValue(10)}px;
  border-color: ${({ theme }) => theme.colors.salmon};
`;

export const WrapperAnimationType = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.pink_light};

  padding: ${RFValue(15)}px 0;
`;

export const WrapperTypeSelect = styled.View`
  flex-direction: row;

  border-bottom-width: ${RFValue(1)}px;
  border-color: ${({ theme }) => theme.colors.salmon};
  border-radius: ${RFValue(8)}px;
  padding: ${RFValue(10)}px ${RFValue(20)}px;

  align-items: center;
`;

export const TextType = styled.Text`
  font-size: ${RFValue(15)}px;

  font-family: ${({ theme }) => theme.fonts.POPPINS_MEDIUM};
  color: ${({ theme }) => theme.colors.salmon};
`;

export const TextTypeSelected = styled.Text`
  font-size: ${RFValue(17)}px;
  margin-left: ${RFValue(6)}px;
  font-family: ${({ theme }) => theme.fonts.POPPINS_BOLD};
  color: ${({ theme }) => theme.colors.salmon};
`;

export const RoundViewAnimation = styled.TouchableOpacity`
  width: ${RFValue(100)}px;
  height: ${RFValue(100)}px;

  background-color: ${({ theme }) => theme.colors.shape};

  border-radius: ${RFValue(55)}px;

  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.salmon};

  elevation: 4;

  overflow: hidden;
`;

export const WrapperDontSelectedType = styled.View``;

export const Footer = styled.View`
  padding: ${RFValue(10)}px ${RFValue(20)}px;
  background-color: ${({ theme }) => theme.colors.salmon};

  align-items: center;
  justify-content: center;
`;

export const WrapperButton = styled.View`
  background-color: ${({ theme }) => theme.colors.pink_light};

  width: ${RFValue(130)}px;
  padding: ${RFValue(8)}px 0;

  align-items: center;
  justify-content: center;

  border-radius: ${RFValue(20)}px;
`;

export const ButtonContinue = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.pink_light};

  width: ${RFValue(130)}px;
  padding: ${RFValue(8)}px 0;

  align-items: center;
  justify-content: center;

  border-radius: ${RFValue(20)}px;
`;

export const ButtonContinueTitle = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.POPPINS_BOLD};
  color: ${({ theme }) => theme.colors.salmon};
`;

export const WrapperLottieTypeSelected = styled.View`
  flex: 1;

  align-items: center;
  justify-content: center;
`;

export const WrapperInput = styled.View`
  margin-bottom: ${RFValue(20)}px;
`;
