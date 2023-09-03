import DescriptionSection from "@/components/Shop/DescriptionSection";
import FilterBar from "@/components/Shop/FilterBar";
import ShopBreadCrumbs from "@/components/Shop/ShopBreadCrumbs";
import ShopProducts from "@/components/Shop/ShopProducts";
import useFetch from "@/hooks/useFetch";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const Shop = () => {
  let { catId, subId } = useParams();
  const [display, setDisplay] = useState("grid");
  const { data: category } = useFetch(`/categories/${catId}?populate=*`);
  const [pageSize, setPageSize] = useState(12);
  const [itemsIndex, setItemIndex] = useState();
  const [sortItem, setSortItem] = useState();
  const [subCat, setSubCat] = useState();
  console.log(subCat);
  useEffect(() => {
    let subCat = category?.attributes?.sub_categories?.data.find((item) => {
      return item?.id == subId;
    });
    setSubCat(subCat);
  }, [category?.attributes?.sub_categories?.data, subId]);

  return (
    <>
      <ShopBreadCrumbs
        catId={category?.id}
        catTitle={category?.attributes?.title}
        subTitle={subCat?.attributes?.title}
      />
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
        categoryName={category?.attributes?.title}
        subCategories={category?.attributes?.sub_categories?.data}
        setItemIndex={setItemIndex}
      />
      <DescriptionSection />
    </>
  );
};

export default Shop;
