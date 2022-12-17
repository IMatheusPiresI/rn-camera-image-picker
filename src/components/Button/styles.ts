import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

type VariantProps = {
  disabled?: boolean;
  variant?: 'salmon' | 'delete';
};

export const Container = styled.TouchableOpacity<VariantProps>`
  background-color: ${({ theme }) => theme.colors.pink_light};

  width: ${RFValue(130)}px;
  padding: ${RFValue(8)}px 0;

  align-items: center;
  justify-content: center;

  border-radius: ${RFValue(20)}px;

  ${({ variant }) =>
    variant === 'salmon' &&
    css`
      background-color: ${({ theme }) => theme.colors.salmon};
    `}

  ${({ variant }) =>
    variant === 'delete' &&
    css`
      background-color: ${({ theme }) => theme.colors.error};
    `}



  ${({ theme, disabled }) =>
    disabled &&
    css`
      background-color: ${theme.colors.gray};
    `}
`;

export const Title = styled.Text<VariantProps>`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.POPPINS_BOLD};
  color: ${({ theme }) => theme.colors.salmon};

  ${({ variant }) =>
    variant === 'salmon' &&
    css`
      color: ${({ theme }) => theme.colors.shape};
    `}

  ${({ variant }) =>
    variant === 'delete' &&
    css`
      color: ${({ theme }) => theme.colors.shape};
    `}



  ${({ theme, disabled }) =>
    disabled &&
    css`
      color: ${theme.colors.shape};
    `}
`;
