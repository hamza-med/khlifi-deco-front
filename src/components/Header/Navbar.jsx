import { menuItems } from "./menuItems";
import NavbarItem from "@/components/Header/NavbarItem";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="menu" role="list">
        {menuItems.map((menu, index) => {
          return <NavbarItem item={menu} key={index} />;
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
