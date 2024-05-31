import { useShoppingCart } from "@/hooks/useShoppingCart";
import { Button, Divider, HStack } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const ProductItem = ({ item }) => (
  <HStack>
    <p className="billing__item">{item?.title}</p>
    <p>&#215;</p>
    <p className="billing__quantity">{item?.quantity}</p>
  </HStack>
);

const BillingInfo = ({ onOpen, isDisabled, isLoading }) => {
  const { cartItems, subtotal } = useShoppingCart();
  const { t } = useTranslation();

  return (
    <div className="billingInfo__wrapper">
      <div className="billingInfo__content">
        <div className="billingInfo__content--1">
          <h1>{t("cart.product")}</h1>
          {cartItems.map((el) => (
            <ProductItem key={el?.id} item={el} />
          ))}
          <h2>{t("cart.subtotal")}</h2>
          <h2>Total</h2>
        </div>
        <div className="billingInfo__content--2">
          <h1>{t("cart.subtotal")}</h1>
          {cartItems.map((el) => (
            <p key={el?.id}>{el?.quantity * el?.price} TND</p>
          ))}
          <h2 className="billing__souTotal">{subtotal} TND</h2>
          <h2 className="billing__total">{subtotal} TND</h2>
        </div>
      </div>
      <Divider borderTop="1px solid #D9D9D9" m="1em auto" mb="2em" />
      <p>
        {t("checkout.note")}
        <span style={{ cursor: "pointer", fontWeight: "600" }} onClick={onOpen}>
          {" "}
          {t("checkout.modality")}
        </span>
      </p>
      <Button type="submit" isDisabled={isDisabled} isLoading={isLoading}>
        {t("checkout.btn")}
      </Button>
    </div>
  );
};

export default BillingInfo;
