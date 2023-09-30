import AuthProfile from "@/components/AuthProfile";
import ShoppingCart from "@/components/Layout/Header/Cart/ShoppingCart";
import { useAuthContext } from "@/hooks/useAuthContext";
import { useShoppingCart } from "@/hooks/useShoppingCart";
import { Avatar, HStack, Menu, MenuButton } from "@chakra-ui/react";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { RiArrowDropDownLine } from "react-icons/ri";

const NavIcons = ({ onOpen }) => {
  const { openCart, cartItems, isOpen, closeCart } = useShoppingCart();
  const navigate = useNavigate();
  const { user } = useAuthContext();
  
  return (
    <div className="nav_icons">
      {user ? (
        <Menu placement="bottom-end">
          <MenuButton>
            <HStack gap="0">
              <Avatar
                name={user?.username}
                textColor="white"
                bgColor="teal.500"
                w="37px"
                h="37px"
                fontSize="0.9rem"
                display="flex"
              />
              <RiArrowDropDownLine fontSize="1.2rem" />
            </HStack>
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
