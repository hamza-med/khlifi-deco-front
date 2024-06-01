import useFetch from "@/hooks/useFetch";
import Paginator from "@/uilib/Paginator";
import ProductCard from "@/uilib/ProductCard";
import { calculateIndexes } from "@/utils/calculateIndex";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import PriceFilter from "./PriceFilter";
import SubCategory from "./SubCategory";
import { useMediaQuery } from "@chakra-ui/react";
import FilterDrawer from "./FilterDrawer";
import { useTranslation } from "react-i18next";

const ShopProducts = ({
  isOpen,
  onClose,
  sortItem = "asc",
  display,
  categoryName,
  subCategories,
  pageSize = 12,
  setItemIndex,
}) => {
  const [page, setPage] = useState(1);
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [selectedSubCats, setSelectedSubCats] = useState([]);
  const [filteredPrice, setFilteredPrice] = useState([10, 200]);
  const [searchParams] = useSearchParams();
  const subId = searchParams.get("sub");
  const { t,i18n:{language} } = useTranslation();
  const { category, priceFilterTitle } = t("shop");
  useEffect(() => {
    if (subId !== null) {
      setSelectedSubCats([subId]);
    } else {
      setSelectedSubCats([]);
    }
  }, [subId]);
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
    `/products?locale=${language}&pagination[pageSize]=${pageSize}&pagination[page]=${page}&filters[categories][title][$eq]=${categoryName}${subCategoriesQuery}&[filters][price][$lte]=${filteredPrice[1]}&[filters][price][$gte]=${filteredPrice[0]}&sort=price:${sortItem}&populate[img][fields][0]=name&populate[img][fields][1]=url`
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
          <p className="title">
            {category} {categoryName}
          </p>
          <div className="content">
            {subCategories?.map((item) => (
              <SubCategory
                isChecked={selectedSubCats.includes(item?.id.toString())}
                handleChange={handleChange}
                key={item?.id}
                id={item?.id}
                name={item?.attributes?.title}
              />
            ))}
            <PriceFilter
              title={priceFilterTitle}
              setPage={setPage}
              filteredPrice={filteredPrice}
              setFilteredPrice={setFilteredPrice}
            />
          </div>
        </div>
      ) : (
        <FilterDrawer
          setPage={setPage}
          filteredPrice={filteredPrice}
          selectedSubCats={selectedSubCats}
          isOpen={isOpen}
          onClose={onClose}
          subCategories={subCategories}
          catName={categoryName}
          setFilteredPrice={setFilteredPrice}
          handleChange={handleChange}
        />
      )}
      <div className={`shopProducts_container__right `}>
        <div className={`shopProducts_container__right--products ${display}`}>
          {products?.map((product) => {
            return (
              <ProductCard
                display={display}
                product={product?.attributes}
                key={product?.id}
                id={product?.id}
              />
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
