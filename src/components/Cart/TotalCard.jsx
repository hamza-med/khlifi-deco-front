import { useShoppingCart } from "@/hooks/useShoppingCart";
import { HStack } from "@chakra-ui/react";

const TotalCard = () => {
  const { subtotal } = useShoppingCart();
  return (
    <div className="table__card">
      <h1>Cart totals</h1>
      <HStack justifyContent="start" width="100%" gap="4em">
        <h2>Subtotal</h2>
        <p style={{ color: "#9F9F9F" }}>{subtotal} TND</p>
      </HStack>
      <HStack justifyContent="start" width="100%"  gap="4em">
        <h2>Total</h2>
        <p style={{ color: "#ac8f67", fontWeight: "600",fontSize:"1.2rem" }}>{subtotal} TND</p>
      </HStack>
      <button>Reserver </button>
    </div>
  );
};

export default TotalCard;
