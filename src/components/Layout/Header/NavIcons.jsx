import ShoppingCart from "@/components/Shop/Cart/ShoppingCart";
import { useShoppingCart } from "@/hooks/useShoppingCart";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";

const NavIcons = ({ onOpen }) => {
  const { openCart, cartItems } = useShoppingCart();

  return (
    <div className="nav_icons">
      <AiOutlineUser />
      <AiOutlineSearch onClick={onOpen} />
      <div className="cart-icon">
        <AiOutlineShoppingCart onClick={openCart} />
        <span className="cartBadge">{cartItems.length}</span>
      </div>
      <ShoppingCart />
    </div>
  );
};

export default NavIcons;
