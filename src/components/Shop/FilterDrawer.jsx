import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Divider,
} from "@chakra-ui/react";

//import { useNavigate } from "react-router-dom";

const FilterDrawer = ({ isOpen, onClose }) => {
  //const navigate = useNavigate();

  return (
    <Drawer
      isOpen={isOpen}
      placement="left"
      onClose={onClose}
      variant="secondary"
    >
      <DrawerOverlay />
      <DrawerContent
        height={["100%", "100%", "100%"]}
        maxW={["75%", "100%", "380px"]}
      >
        <DrawerHeader></DrawerHeader>
        <Divider border="1px solid #D9D9D9" width="80%" margin="10px auto" />
        <DrawerBody></DrawerBody>
        <Divider border="1px solid #D9D9D9" />
        <DrawerFooter display="flex" justifyContent="center"></DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default FilterDrawer;
