import {
  ActivityIndicator,
  Avatar,
  Button,
  Colors,
  TextInput,
} from "react-native-paper";
import styled from "styled-components";
import { colors } from "../../../infrastructure/theme/colors";

export const CartIconContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const PaymentProcessing = styled(ActivityIndicator).attrs({
  size: 80,
  animating: true,
  color: colors.brand.primary,
})`
  position: absolute;
  top: 50%;
  left: 35%;
  z-index: 999;
`;

export const CartIcon = styled(Avatar.Icon).attrs({
  size: 128,
})`
  background-color: ${(props) => props.bg || props.theme.colors.brand.primary};
`;

export const NameInput = styled(TextInput)`
  margin: 16px;
  width: 327px;
`;


export const PayButton = styled(Button).attrs({
  color: colors.ui.success,
})`
  width: 80%;
  align-self: center;
  padding: ${(props) => props.theme.space[2]};
`;

export const ClearButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  width: 80%;'
  align-self: center;
  padding: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;
