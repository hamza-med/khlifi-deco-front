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
      <DrawerContent height="600px" maxW="350px">
        <DrawerHeader>
          <HStack justifyContent="space-between">
            <Heading fontSize="1.3rem">Shopping Cart</Heading>
            <BsCartX
              fontSize="1.8rem"
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
          <Button variant="outline" mr={3} borderRadius="50px">
            Cart
          </Button>
          <Button variant="outline" borderRadius="50px">
            Checkout
          </Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default ShoppingCart;
