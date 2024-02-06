import React, { useContext, useState } from "react";
import { ScrollView } from "react-native";
import { Divider, List } from "react-native-paper";

import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

import { SafeArea } from "../../../components/utility/safe-area.component";
import { colors } from "../../../infrastructure/theme/colors";
import { Spacer } from "../../../components/spacer/spacer.component";
import { OrderButton } from "../components/restaurant-list.styles";
import { CartContext } from "../../../services/cart/cart.context";

export const RestaurantDetailScreen = ({ navigation, route }) => {
  const [breakfastExpended, setBreakfastExtended] = useState(false);
  const [lunchExpended, setLunchExtended] = useState(false);
  const [dinnerExpended, setDinnerExtended] = useState(false);
  const [drinksExpended, setDrinksExtended] = useState(false);

  const { restaurant } = route.params;
  const { addToCart } = useContext(CartContext);
  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
      <ScrollView>
        <List.Accordion
          theme={{
            colors: {
              primary: colors.brand.primary,
              background: colors.bg.primary,
            },
          }}
          title="Breakfast"
          left={(props) => <List.Icon {...props} icon="bread-slice" />}
          expanded={breakfastExpended}
          onPress={() => setBreakfastExtended(!breakfastExpended)}
        >
          <List.Item title="Eggs Benedict" />
          <Divider />
          <List.Item title="Classic Breakfast" />
          <Divider />
        </List.Accordion>
        <Divider />

        <List.Accordion
          theme={{
            colors: {
              primary: colors.brand.primary,
              background: colors.bg.primary,
            },
          }}
          title="Lunch"
          left={(props) => <List.Icon {...props} icon="hamburger" />}
          expanded={lunchExpended}
          onPress={() => setLunchExtended(!lunchExpended)}
        >
          <List.Item title="Burger w/ Fries" />
          <Divider />
          <List.Item title="Steak Sandwich" />
          <Divider />
          <List.Item title="Mushroom Soup" />
        </List.Accordion>
        <Divider />

        <List.Accordion
          theme={{
            colors: {
              primary: colors.brand.primary,
              background: colors.bg.primary,
            },
          }}
          title="Dinner"
          left={(props) => <List.Icon {...props} icon="food" />}
          expanded={dinnerExpended}
          onPress={() => setDinnerExtended(!dinnerExpended)}
        >
          <List.Item title="Spaghetti Bolognese" />
          <Divider />
          <List.Item title="Veal Cutlet with Chicken Mushroom Rotini" />
          <Divider />
          <List.Item title="Steak Frites" />
        </List.Accordion>
        <Divider />

        <List.Accordion
          theme={{
            colors: {
              primary: colors.brand.primary,
              background: colors.bg.primary,
            },
          }}
          title="Drinks"
          left={(props) => <List.Icon {...props} icon="cup" />}
          expanded={drinksExpended}
          onPress={() => setDrinksExtended(!drinksExpended)}
        >
          <List.Item title="Coffee" />
          <Divider />
          <List.Item title="Tea" />
          <Divider />
          <List.Item title="Modelo" />
          <Divider />
          <List.Item title="Coke" />
          <Divider />
          <List.Item title="Fanta" />
        </List.Accordion>
      </ScrollView>
      <Spacer position="bottom" size="large">
        <OrderButton
          icon="cash"
          mode="contained"
          onPress={() => {
            addToCart({ item: "special", price: 1299 }, restaurant);
            navigation.navigate("Checkout");
          }}
        >
          Order Special Only 12.99!
        </OrderButton>
      </Spacer>
    </SafeArea>
  );
};
