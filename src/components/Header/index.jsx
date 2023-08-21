import MiniHeader from "../MiniHeader";
import Logo from "./Logo";
import Navbar from "./Navbar";
import ToggleMenu from "./ToggleMenu";

const Header = () => {
  return (
    <header>
      <MiniHeader />
      <div className="header">
        <Logo />
        <Navbar />
        <ToggleMenu />
        <button className="header-button">voir les plans</button>
      </div>
    </header>
  );
};
export default Header;
