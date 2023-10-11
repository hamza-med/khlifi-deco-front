import useFetch from "@/hooks/useFetch";
import { useDisclosure, useMediaQuery } from "@chakra-ui/react";

import { useState } from "react";
import MiniHeader from "../../MiniHeader";
import NavbarDrawer from "../../NavbarDrawer";
import ShoppingCart from "./Cart/ShoppingCart";
import Logo from "./Logo";
import Navbar from "./Navbar";
import NavIcons from "./NavIcons";
import SearchModal from "./SearchModal/SearchModal";
import ToggleMenu from "./ToggleMenu";

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [open, setOpen] = useState(false);
  const { data: categories } = useFetch(`/categories?populate=*`);
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  return (
    <header>
      <MiniHeader />
      <div className="header">
        <Logo isMobile={isMobile} />
        <Navbar categories={categories} />
        <NavIcons onOpen={onOpen} />
        <NavbarDrawer isOpen={open} categories={categories} showDrawer={setOpen} />
        <ToggleMenu showDrawer={setOpen} isOpen={open} isMobile={isMobile} />
        <SearchModal isOpen={isOpen} onClose={onClose} />
        <ShoppingCart />
      </div>
    </header>
  );
};
export default Header;
