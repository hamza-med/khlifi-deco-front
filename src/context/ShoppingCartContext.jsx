import { createContext, useState } from "react";

import { useLocalStorage } from "../hooks/useLocalStorage";

export const ShoppingCartContext = createContext({});

export function ShoppingCartProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useLocalStorage("shopping-cart", []);

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );
  const subtotal = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);
  function getItemQuantity(id) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }
  function increaseCartQuantity(id, quantity, title, price, src, start, end) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, title, price, src, start, end, quantity }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, start, end, quantity: item.quantity + quantity };
          } else {
            return item;
          }
        });
      }
    });
  }
  function decreaseCartQuantity(id) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  }
  function removeFromCart(id) {
    setCartItems((currItems) => {
      return currItems.filter((item) => item.id !== id);
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
        isOpen,
        subtotal,
        cartItems,
        cartQuantity,
      }}
    >
      {children}
      {/* <ShoppingCart isOpen={isOpen} onClose={closeCart} onOpen={openCart} /> */}
    </ShoppingCartContext.Provider>
  );
}
