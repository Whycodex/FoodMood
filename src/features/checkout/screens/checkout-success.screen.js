import React from "react";
import { SafeArea } from "../../../components/utility/safe-area.component";
import { CartIcon, CartIconContainer } from "../components/checkout.styles";
import { Text } from "../../../components/typography/text.component";
import { Colors } from "react-native-paper";

export const CheckoutSuccessScreen = () => (
  <SafeArea>
    <CartIconContainer>
      <CartIcon icon="check-bold" bg={Colors.green700}/>
      <Text>Success!</Text>
    </CartIconContainer>
  </SafeArea>
);
