import useFetch from "@/hooks/useFetch";
import { Spinner, useDisclosure } from "@chakra-ui/react";
import { Suspense, lazy, useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const ShopProducts = lazy(() => import("@/components/Shop/ShopProducts"));
const ShopBreadCrumbs = lazy(() => import("@/components/Shop/ShopBreadCrumbs"));
const FilterBar = lazy(() => import("@/components/Shop/FilterBar"));
const DescriptionSection = lazy(() =>
  import("@/components/Shop/DescriptionSection")
);

const Shop = () => {
  let { catId, subId } = useParams();
  const [display, setDisplay] = useState("grid");
  const { data: category } = useFetch(`/categories/${catId}?populate=*`);
  const [pageSize, setPageSize] = useState(12);
  const [itemsIndex, setItemIndex] = useState();
  const [sortItem, setSortItem] = useState();
  const [subCat, setSubCat] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  useEffect(() => {
    let subCat = category?.attributes?.sub_categories?.data.find((item) => {
      return item?.id == subId;
    });
    setSubCat(subCat);
  }, [category?.attributes?.sub_categories?.data, subId]);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <ShopBreadCrumbs
          catId={category?.id}
          catTitle={category?.attributes?.title}
          subTitle={subCat?.attributes?.title}
        />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <FilterBar
          onOpen={onOpen}
          setDisplay={setDisplay}
          setPageSize={setPageSize}
          itemsIndex={itemsIndex}
          setSortItem={setSortItem}
        />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <ShopProducts
          isOpen={isOpen}
          onClose={onClose}
          sortItem={sortItem}
          pageSize={pageSize}
          display={display}
          categoryName={category?.attributes?.title}
          subCategories={category?.attributes?.sub_categories?.data}
          setItemIndex={setItemIndex}
        />
      </Suspense>
      <Suspense>
        <DescriptionSection />
      </Suspense>
    </>
  );
};

export default Shop;
