import { ShoppingCartContext } from "@/context/ShoppingCartContext";
import { useContext } from "react";

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}