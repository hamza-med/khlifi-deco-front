import ShoppingCart from "@/components/ShoppingCart";
import { useShoppingCart } from "@/hooks/useShoppingCart";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";

const NavIcons = () => {
  const { openCart } = useShoppingCart();

  return (
    <div className="nav_icons">
      <AiOutlineUser />
      <AiOutlineSearch />
      <AiOutlineShoppingCart onClick={openCart} />
      <ShoppingCart />
    </div>
  );
};

export default NavIcons;
