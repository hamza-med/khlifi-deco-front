import { useShoppingCart } from "@/hooks/useShoppingCart";
import { HStack, Text, VStack } from "@chakra-ui/react";
import CartItem from "./CartItem";
import { useTranslation } from "react-i18next";

const CartContent = () => {
  const { cartItems, subtotal } = useShoppingCart();
  const { t } = useTranslation();

  return (
    <VStack align="start" gap="20px" height="95%" mt="20px ">
      {cartItems.map((item) => (
        <CartItem item={item} key={item?.id} />
      ))}
      <HStack mt="auto" justify="space-between" width="90%" textAlign="center">
        <Text>{t("cart.subtotal")}</Text>
        <Text color="#ac8f67">{subtotal} TND</Text>
      </HStack>
    </VStack>
  );
};
export default CartContent;
