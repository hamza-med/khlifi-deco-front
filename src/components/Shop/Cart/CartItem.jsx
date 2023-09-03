import { useShoppingCart } from "@/hooks/useShoppingCart";
import { IoCloseCircleSharp } from "react-icons/io5";
const CartItem = ({ item }) => {
  const { removeFromCart } = useShoppingCart();
  return (
    <div className="cart__wrapper">
      <img className="cart__wrapper--image" src={item?.src} alt="" />
      <div className="cart__wrapper--details">
        <h3 className="cart__wrapper--details--title">{item?.title}</h3>
        <div className="cart__wrapper--details--price">
          <span className="span-1">{item?.quantity}</span>
          <span className="span-2">&#215;</span>
          <span className="span-3">{item?.price} TND</span>
        </div>
      </div>
      <div className="icon">
        <IoCloseCircleSharp
          color="grey"
          onClick={() => removeFromCart(item?.id)}
        />
      </div>
    </div>
  );
};

export default CartItem;
