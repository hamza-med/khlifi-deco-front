import {
  Drawer,
  DrawerBody,
  Heading,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Button,
  HStack,
  Divider,
} from "@chakra-ui/react";
import { BsCartX } from "react-icons/bs";

const ShoppingCart = ({ isOpen, onClose }) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onClose}
      variant="secondary"
    >
      <DrawerOverlay />
      <DrawerContent height="600px" maxW="380px">
        <DrawerHeader>
          <HStack justifyContent="space-between">
            <Heading fontSize="1.3rem">Shopping Cart</Heading>
            <BsCartX
              fontSize="1.6rem"
              color="#9F9F9F"
              cursor="pointer"
              onClick={() => onClose()}
            />
          </HStack>
        </DrawerHeader>
        <DrawerBody>
          <div>Content...</div>
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
