import { useShoppingCart } from "@/hooks/useShoppingCart";

const CartContent = () => {
  const { cartItems } = useShoppingCart();
  console.log(cartItems);
  return (
    <div>

    </div>
  )
}
export default CartContent