import { useShoppingCart } from "@/hooks/useShoppingCart";
import { Button, Divider, HStack } from "@chakra-ui/react";

const ProductItem = ({ item }) => (
  <HStack>
    <p className="billing__item">{item?.title}</p>
    <p>&#215;</p>
    <p className="billing__quantity">{item?.quantity}</p>
  </HStack>
);

const BillingInfo = ({ isDisabled, isSubmitting }) => {
  const { cartItems, subtotal } = useShoppingCart();

  return (
    <div className="billingInfo__wrapper">
      <div className="billingInfo__content">
        <div className="billingInfo__content--1">
          <h1>Produit</h1>
          {cartItems.map((el) => (
            <ProductItem key={el?.id} item={el} />
          ))}
          <h2>Sous-total</h2>
          <h2>Total</h2>
        </div>
        <div className="billingInfo__content--2">
          <h1>Sous-total</h1>
          {cartItems.map((el) => (
            <p key={el?.id}>{el?.quantity * el?.price} TND</p>
          ))}
          <h2 className="billing__souTotal">{subtotal} TND</h2>
          <h2 className="billing__total">{subtotal} TND</h2>
        </div>
      </div>
      <Divider borderTop="1px solid #D9D9D9" m="1em auto" mb="2em" />
      <p>
        La commande ne peut être confirmé qu &rsquo;avec une avance de 40% de la
        somme globale voir
        <span style={{ cursor: "pointer", fontWeight: "600" }}>
          {" "}
          modalités de paiement.
        </span>
      </p>
      <Button type="submit" isDisabled={isDisabled} isLoading={isSubmitting}>
        Passer commande
      </Button>
    </div>
  );
};

export default BillingInfo;
