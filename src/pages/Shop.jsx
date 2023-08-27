import FilterBar from "@/components/Shop/FilterBar";
import ShopBreadCrumbs from "@/components/Shop/ShopBreadCrumbs";
import ShopProducts from "@/components/Shop/ShopProducts";
import { useState } from "react";

const Shop = () => {
  const [display, setDisplay] = useState("grid");
  return (
    <>
      <ShopBreadCrumbs />
      <FilterBar setDisplay={setDisplay} />
      <ShopProducts display={display} />
    </>
  );
};

export default Shop;
