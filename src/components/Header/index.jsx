import Logo from "./Logo";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <div className="mini-navbar">
        Meilleur organisateur d&apos; événements en tunisie{" "}
      </div>
      <div className="header">
        <Logo />
        <Navbar />
      </div>
    </header>
  );
};
export default Header;
