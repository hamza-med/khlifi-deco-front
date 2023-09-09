import useFetch from "@/hooks/useFetch";
import { useMobile } from "@/hooks/useMobile";
import { useDisclosure } from "@chakra-ui/react";

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
  const isMobile = useMobile();
  return (
    <header>
      <MiniHeader />
      <div className="header">
        <Logo isMobile={isMobile} />
        <Navbar categories={categories} />
        <NavIcons onOpen={onOpen} />
        <NavbarDrawer isOpen={open} categories={categories} />
        <ToggleMenu showDrawer={setOpen} isOpen={open} />
        <SearchModal isOpen={isOpen} onClose={onClose} />
        <ShoppingCart  />

        {/* <button className="header-button">voir les plans</button> */}
      </div>
    </header>
  );
};
export default Header;
