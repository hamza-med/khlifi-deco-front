import useFetch from "@/hooks/useFetch";
import Paginator from "@/uilib/Paginator";
import { calculateIndexes } from "@/utils/calculateIndex";
import { lazy, Suspense, useEffect, useState } from "react";
import PriceFilter from "./PriceFilter";
import SubCategory from "./SubCategory";
import { Skeleton, useMediaQuery } from "@chakra-ui/react";
import FilterDrawer from "./FilterDrawer";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";

const ProductCard = lazy(() => import("@/uilib/ProductCard"));

const ShopProducts = ({
  catId,
  subId,
  isOpen,
  onClose,
  sortItem = "asc",
  display,
  categoryName,
  pageSize = 12,
  setItemIndex,
}) => {
  const [page, setPage] = useState(1);
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [selectedSubCats, setSelectedSubCats] = useState([]);
  const [searchParams] = useSearchParams();
  const subParam = searchParams.get("sub");
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const { category, priceFilterTitle } = t("shop");

  const { data: subCats } = useFetch(
    `/sub-categories?locale=${language}&fields[0]=title&fields[1]=locale&filters[categories][id][$eq]=${catId}`
  );

  const { data: prices } = useFetch(
    `/products?fields[0]=price&filters[categories][id][$eq]=${catId}&pagination[pageSize]=200`
  );
  const [filteredPrice, setFilteredPrice] = useState([0, 1000]);
  const [maxPrices, setMaxPrices] = useState([0, 1000]);


  useEffect(() => {
    const pricesArray = prices?.map((ele) => ele.attributes.price);
    if (pricesArray) {
      if (pricesArray?.length > 0) {
        setFilteredPrice([0, Math.max(...pricesArray)]);
        setMaxPrices([0, Math.max(...pricesArray)]);
      }
    }
  }, [prices]);

  useEffect(() => {
    if (
      subCats !== null &&
      subId &&
      subParam &&
      language == subCats[0]?.attributes.locale
    ) {
      setSelectedSubCats([subId]);
    } else {
      setSelectedSubCats([]);
    }
  }, [language, subCats, subId, subParam]);

  const handleChange = (e) => {
    setPage(1);
    const value = e.target.value;
    const isChecked = e.target.checked;
    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item != value)
    );
  };

  const subCategoriesQuery = selectedSubCats
    .map((item) => `&filters[sub_categories][id][$eq]=${item}`)
    .join("");

  const { data: products, meta } = useFetch(
    `/products?locale=${language}&pagination[pageSize]=${pageSize}&pagination[page]=${page}&filters[categories][id][$eq]=${catId}${subCategoriesQuery}&[filters][price][$lte]=${filteredPrice[1]}&[filters][price][$gte]=${filteredPrice[0]}&sort=price:${sortItem}&populate[img][fields][0]=name&populate[img][fields][1]=url`
  );
  useEffect(() => {
    const indexes = calculateIndexes(
      meta?.pagination?.page,
      meta?.pagination?.pageSize,
      meta?.pagination?.total
    );
    setItemIndex(indexes);
  }, [
    meta?.pagination?.page,
    meta?.pagination?.pageSize,
    meta?.pagination?.total,
    setItemIndex,
  ]);
  const pagesArray = Array(meta?.pagination?.pageCount)
    .fill()
    .map((_, index) => index + 1);

  return (
    <div className={`shopProducts_container ${display}`}>
      {!isMobile ? (
        <div className="shopProducts_container__left">
          {subCats?.length != 0 && (
            <p className="title">
              {category} {categoryName}
            </p>
          )}
          <div className="content">
            {subCats?.map((item) => (
              <SubCategory
                isChecked={selectedSubCats.includes(item?.id.toString())}
                handleChange={handleChange}
                key={item?.id}
                id={item?.id}
                name={item?.attributes?.title}
              />
            ))}
            <PriceFilter
              maxPrices={maxPrices}
              title={priceFilterTitle}
              setPage={setPage}
              filteredPrice={filteredPrice}
              setFilteredPrice={setFilteredPrice}
            />
          </div>
        </div>
      ) : (
        <FilterDrawer
          maxPrices={maxPrices}
          setPage={setPage}
          filteredPrice={filteredPrice}
          selectedSubCats={selectedSubCats}
          isOpen={isOpen}
          onClose={onClose}
          subCategories={subCats}
          catName={categoryName}
          setFilteredPrice={setFilteredPrice}
          handleChange={handleChange}
        />
      )}
      <div className={`shopProducts_container__right `}>
        <div className={`shopProducts_container__right--products ${display}`}>
          {products?.map((product) => {
            return (
              <Suspense
                key={product?.id}
                fallback={
                  <Skeleton height={["350px", "400px"]} width={["250px"]} />
                }
              >
                <ProductCard product={product?.attributes} id={product?.id} />
              </Suspense>
            );
          })}
        </div>
        {pagesArray.length !== 1 && (
          <Paginator
            page={page}
            pages={pagesArray}
            setPage={setPage}
            pageCount={meta?.pagination.pageCount}
          />
        )}
      </div>
    </div>
  );
};

export default ShopProducts;
