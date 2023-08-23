import { useState } from "react";
import MiniHeader from "../../MiniHeader";
import NavbarDrawer from "../../NavbarDrawer";
import Logo from "./Logo";
import Navbar from "./Navbar";
import ToggleMenu from "./ToggleMenu";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <MiniHeader />
      <div className="header">
        <Logo />
        <Navbar />
        <NavbarDrawer isOpen={open} />
        <ToggleMenu showDrawer={setOpen} isOpen={open} />
        <button className="header-button">voir les plans</button>
      </div>
    </header>
  );
};
export default Header;
