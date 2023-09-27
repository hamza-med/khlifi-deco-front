import AuthProfile from "@/components/AuthProfile";
import ShoppingCart from "@/components/Layout/Header/Cart/ShoppingCart";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useShoppingCart } from "@/hooks/useShoppingCart";
import { Menu, MenuButton } from "@chakra-ui/react";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const NavIcons = ({ onOpen }) => {
  const { openCart, cartItems, isOpen, closeCart } = useShoppingCart();
  const navigate = useNavigate();
  const { user } = useAuthContext();

  return (
    <div className="nav_icons">
      {user ? (
        <Menu>
          <MenuButton>
            <AiOutlineUser />
          </MenuButton>
          <AuthProfile />
        </Menu>
      ) : (
        <AiOutlineUser onClick={() => navigate("/login")} />
      )}
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
