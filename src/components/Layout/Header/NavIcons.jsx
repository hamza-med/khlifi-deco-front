import AuthProfile from "@/components/AuthProfile";
import ShoppingCart from "@/components/Layout/Header/Cart/ShoppingCart";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useShoppingCart } from "@/hooks/useShoppingCart";
import { Avatar, Menu, MenuButton } from "@chakra-ui/react";
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
  console.log(user);
  return (
    <div className="nav_icons">
      {user ? (
        <Menu placement="bottom-end">
          <MenuButton>
            <Avatar
              name={user?.username}
              textColor="white"
              bgColor="teal.500"
              w="37px"
              h="37px"
              fontSize="0.9rem"
              display="flex"
            
            />
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
