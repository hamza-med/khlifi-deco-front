import FilterBar from "@/components/Shop/FilterBar";
import ShopBreadCrumbs from "@/components/Shop/ShopBreadCrumbs";
import ShopProducts from "@/components/Shop/ShopProducts";
import useFetch from "@/hooks/useFetch";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Shop = () => {
  let { id } = useParams();
  const [display, setDisplay] = useState("grid");
  const { data } = useFetch(`/categories/${id}?populate=*`);
  const [pageSize, setPageSize] = useState("12");
  const [itemsIndex, setItemIndex] = useState();
  return (
    <>
      <ShopBreadCrumbs title={data?.attributes?.title} />
      <FilterBar setDisplay={setDisplay} setPageSize={setPageSize} itemsIndex={itemsIndex} />
      <ShopProducts
        pageSize={pageSize}
        display={display}
        categoryName={data?.attributes?.title}
        subCategories={data?.attributes?.sub_categories?.data}
        setItemIndex={setItemIndex}
      />
    </>
  );
};

export default Shop;
