import { useShoppingCart } from "@/hooks/useShoppingCart";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Button,
  HStack,
  Divider,
  Text,
} from "@chakra-ui/react";
import { BsCartX } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import CartContent from "./CartContent";
import { useTranslation } from "react-i18next";

const ShoppingCart = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const { cartItems } = useShoppingCart();
  const { t } = useTranslation();
  const { cart, shoppingCart } = t("shoppingCart");
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      variant="secondary"
    >
      <DrawerOverlay />
      <DrawerContent
        height={["600px", "100%", "100%"]}
        maxW={["100%", "100%", "380px"]}
      >
        <DrawerHeader>
          <HStack justifyContent="space-between">
            <Text
              fontWeight="600"
              fontSize="1.3rem"
              fontFamily="'Poppins', sans-serif;"
            >
              {shoppingCart}
            </Text>
            <BsCartX
              fontSize="1.6rem"
              color="#9F9F9F"
              cursor="pointer"
              onClick={() => onClose()}
            />
          </HStack>
        </DrawerHeader>
        <Divider border="1px solid #D9D9D9" width="80%" margin="10px auto" />
        <DrawerBody>
          <CartContent />
        </DrawerBody>
        <Divider border="1px solid #D9D9D9" />
        <DrawerFooter display="flex" justifyContent="center">
          <HStack padding="8px">
            <Button
              isDisabled={cartItems?.length === 0}
              variant="outline"
              mr={2}
              borderRadius="50px"
              colorScheme="black"
              padding="4px 30px"
              onClick={() => {
                navigate("/cart");
                onClose();
              }}
            >
              {cart}
            </Button>
            <Button
              isDisabled={cartItems?.length === 0}
              variant="outline"
              colorScheme="black"
              borderRadius="50px"
              padding="4px 18px"
              onClick={() => {
                navigate("/checkout");
                onClose();
              }}
            >
              {t("cart.btn")}
            </Button>
          </HStack>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default ShoppingCart;
