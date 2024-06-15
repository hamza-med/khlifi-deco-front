import useFetch from "@/hooks/useFetch";
import SEO from "@/uilib/SEO";
import { Skeleton, useDisclosure } from "@chakra-ui/react";
import { Suspense, lazy } from "react";
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
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const [display, setDisplay] = useState("grid");
  const { data: category } = useFetch(
    `/categories/${catId}?fields[0]=title&fields[1]=locale&populate[localizations][fields][0]=title`
  );
  const { data: subCat } = useFetch(
    `/sub-categories/${subId}?fields[0]=title&fields[1]=locale&populate[localizations][fields][0]=title`
  );
  const [pageSize, setPageSize] = useState(12);
  const [itemsIndex, setItemIndex] = useState();
  const [sortItem, setSortItem] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { type, metaTitle, metaDesc } = t("shop");

  return (
    <>
      <SEO title={metaTitle} description={metaDesc} />
      <Suspense fallback={<Skeleton />}>
        <ShopBreadCrumbs
          type={type}
          catId={
            category?.attributes.locale === language
              ? catId
              : `${category?.attributes.localizations.data[0].id}`
          }
          catTitle={
            category?.attributes.locale === language
              ? category?.attributes?.title
              : category?.attributes.localizations.data[0].attributes.title
          }
          subTitle={
            subCat?.attributes.locale === language
              ? subCat?.attributes?.title
              : subCat?.attributes.localizations.data[0].attributes.title
          }
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
          subId={
            subCat?.attributes.locale === language
              ? subId
              : `${subCat?.attributes.localizations.data[0].id}`
          }
          isOpen={isOpen}
          onClose={onClose}
          sortItem={sortItem}
          pageSize={pageSize}
          display={display}
          categoryName={
            category?.attributes.locale === language
              ? category?.attributes?.title
              : category?.attributes.localizations.data[0].attributes.title
          }
          catId={
            category?.attributes.locale === language
              ? catId
              : `${category?.attributes.localizations.data[0].id}`
          }
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
