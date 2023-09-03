import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import MiniHeader from "../../MiniHeader";
import NavbarDrawer from "../../NavbarDrawer";
import Logo from "./Logo";
import Navbar from "./Navbar";
import NavIcons from "./NavIcons";
import SearchModal from "./SearchModal/SearchModal";
import ToggleMenu from "./ToggleMenu";

const Header = () => {
  const { isOpen, onOpen ,onClose} = useDisclosure();
  const [open, setOpen] = useState(false);

  return (
    <header>
      <MiniHeader />
      <div className="header">
        <Logo />
        <Navbar />
        <NavIcons onOpen={onOpen} />
        <NavbarDrawer isOpen={open} />
        <ToggleMenu showDrawer={setOpen} isOpen={open} />
        <SearchModal isOpen={isOpen} onClose={onClose} />

        {/* <button className="header-button">voir les plans</button> */}
      </div>
    </header>
  );
};
export default Header;
