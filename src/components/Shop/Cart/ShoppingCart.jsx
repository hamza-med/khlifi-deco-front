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
import CartContent from "./CartContent";

const ShoppingCart = ({ isOpen, onClose }) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      variant="secondary"
    >
      <DrawerOverlay />
      <DrawerContent height="600px" maxW={["100%", "100%", "380px"]}>
        <DrawerHeader>
          <HStack justifyContent="space-between">
            <Text
              fontWeight="600"
              fontSize="1.3rem"
              fontFamily="'Poppins', sans-serif;"
            >
              Shopping Cart
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
        <DrawerFooter>
          <HStack padding="8px">
            <Button
              variant="outline"
              mr={4}
              borderRadius="50px"
              colorScheme="black"
              padding="4px 40px"
            >
              Cart
            </Button>
            <Button
              variant="outline"
              colorScheme="black"
              borderRadius="50px"
              padding="4px 35px"
            >
              Checkout
            </Button>
          </HStack>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default ShoppingCart;
