import ShoppingCart from "@/components/Shop/Cart/ShoppingCart";
import { useShoppingCart } from "@/hooks/useShoppingCart";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";

const NavIcons = () => {
  const { openCart, cartItems } = useShoppingCart();

  return (
    <div className="nav_icons">
      <AiOutlineUser />
      <AiOutlineSearch />
      <div className="cart-icon">
        <AiOutlineShoppingCart onClick={openCart} />
        <span className="cartBadge">{cartItems.length}</span>
      </div>
      <ShoppingCart />
    </div>
  );
};

export default NavIcons;
