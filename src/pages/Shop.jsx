import useFetch from "@/hooks/useFetch";
import { Skeleton, useDisclosure } from "@chakra-ui/react";
import { Suspense, lazy, useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams, useSearchParams } from "react-router-dom";

const ShopProducts = lazy(() => import("@/components/Shop/ShopProducts"));
const ShopBreadCrumbs = lazy(() => import("@/components/Shop/ShopBreadCrumbs"));
const FilterBar = lazy(() => import("@/components/Shop/FilterBar"));
const DescriptionSection = lazy(() =>
  import("@/components/Shop/DescriptionSection")
);

const Shop = () => {
  let { catId } = useParams();
  const [searchParams] = useSearchParams();
  const subId = searchParams.get("sub");
  
  const [display, setDisplay] = useState("grid");
  const { data: category } = useFetch(
    `/categories/${catId}?fields[0]=title&populate[sub_categories][fields][0]=title`
  );
  const [pageSize, setPageSize] = useState(12);
  const [itemsIndex, setItemIndex] = useState();
  const [sortItem, setSortItem] = useState();
  const [subCat, setSubCat] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { t } = useTranslation();

  const { type } = t("shop");

  useEffect(() => {
    let subCat = category?.attributes?.sub_categories?.data.find((item) => {
      return item?.id == subId;
    });
    setSubCat(subCat);
  }, [category?.attributes?.sub_categories?.data, subId]);

  return (
    <>
      <Suspense fallback={<Skeleton />}>
        <ShopBreadCrumbs
          type={type}
          catId={category?.id}
          catTitle={category?.attributes?.title}
          subTitle={subCat?.attributes?.title}
        />
      </Suspense>
      <Suspense fallback={<Skeleton />}>
        <FilterBar
          onOpen={onOpen}
          setDisplay={setDisplay}
          setPageSize={setPageSize}
          itemsIndex={itemsIndex}
          setSortItem={setSortItem}
        />
      </Suspense>
      <Suspense fallback={<Skeleton />}>
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
