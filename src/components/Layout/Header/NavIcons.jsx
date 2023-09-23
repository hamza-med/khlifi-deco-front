import ShoppingCart from "@/components/Layout/Header/Cart/ShoppingCart";
import { useShoppingCart } from "@/hooks/useShoppingCart";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const NavIcons = ({ onOpen }) => {
  const { openCart, cartItems, isOpen, closeCart } = useShoppingCart();
  const navigate = useNavigate();
  return (
    <div className="nav_icons">
      <AiOutlineUser onClick={() => navigate("/login")} />
      <AiOutlineSearch onClick={onOpen} />
      <div className="cart-icon">
        <AiOutlineShoppingCart onClick={openCart} />
        <span className="cartBadge">{cartItems.length}</span>
      </div>
      <ShoppingCart isOpen={isOpen} onClose={closeCart} />
    </div>
  );
};

export default NavIcons;
