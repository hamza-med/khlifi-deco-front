import { useShoppingCart } from "@/hooks/useShoppingCart";
import { HStack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const TotalCard = () => {
  const { subtotal } = useShoppingCart();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { subtotal: sub, cartTotals, btn } = t("cart");
  return (
    <div className="table__card">
      <h1>{cartTotals}</h1>
      <HStack justifyContent="start" width="100%" gap="4em">
        <h2>{sub}</h2>
        <p style={{ color: "#9F9F9F" }}>{subtotal} TND</p>
      </HStack>
      <HStack justifyContent="start" width="100%" gap="4em">
        <h2>Total</h2>
        <p style={{ color: "#ac8f67", fontWeight: "600", fontSize: "1.2rem" }}>
          {subtotal} TND
        </p>
      </HStack>
      <button onClick={() => navigate("/checkout")}>{btn}</button>
    </div>
  );
};

export default TotalCard;
