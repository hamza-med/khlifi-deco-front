import CartTable from "@/components/Cart/CartTable";
import DescriptionSection from "@/components/Shop/DescriptionSection";
import ShopBreadCrumbs from "@/components/Shop/ShopBreadCrumbs";

const Cart = () => {
  return (
    <>
      <ShopBreadCrumbs type="panier"/>
      <CartTable />
      <DescriptionSection/>
    </>
  );
};

export default Cart;
