import DescriptionSection from "@/components/Shop/DescriptionSection";
import FilterBar from "@/components/Shop/FilterBar";
import ShopBreadCrumbs from "@/components/Shop/ShopBreadCrumbs";
import ShopProducts from "@/components/Shop/ShopProducts";
import useFetch from "@/hooks/useFetch";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Shop = () => {
  let { catId } = useParams();
  const [display, setDisplay] = useState("grid");
  const { data } = useFetch(`/categories/${catId}?populate=*`);
  const [pageSize, setPageSize] = useState(12);
  const [itemsIndex, setItemIndex] = useState();
  const [sortItem, setSortItem] = useState();

  return (
    <>
      <ShopBreadCrumbs title={data?.attributes?.title} />
      <FilterBar
        setDisplay={setDisplay}
        setPageSize={setPageSize}
        itemsIndex={itemsIndex}
        setSortItem={setSortItem}
      />
      <ShopProducts
        sortItem={sortItem}
        pageSize={pageSize}
        display={display}
        categoryName={data?.attributes?.title}
        subCategories={data?.attributes?.sub_categories?.data}
        setItemIndex={setItemIndex}
      />
      <DescriptionSection />
    </>
  );
};

export default Shop;
