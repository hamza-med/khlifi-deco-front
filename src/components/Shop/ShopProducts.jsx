import useFetch from "@/hooks/useFetch";
import Paginator from "@/uilib/Paginator";
import ProductCard from "@/uilib/ProductCard";
import { calculateIndexes } from "@/utils/calculateIndex";
import { useEffect, useState } from "react";
import SubCategory from "./SubCategory";

const ShopProducts = ({
  display,
  categoryName,
  subCategories,
  pageSize,
  setItemIndex,
}) => {
  const [page, setPage] = useState("1");
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item != value)
    );
  };
console.log(selectedSubCats);
  const { data: products, meta } = useFetch(
    `/products?pagination[pageSize]=${pageSize}&pagination[page]=${page}&filters[categories][title][$eq]=${categoryName}${selectedSubCats.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&populate=*`,
    page
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
    <div className={`showProducts_container ${display}`}>
      <div className="showProducts_container__left">
        <p className="title">Categories de {categoryName}</p>
        <div className="content">
          {subCategories?.map((item) => (
            <SubCategory
              handleChange={handleChange}
              key={item?.id}
              id={item?.id}
              name={item?.attributes?.title}
            />
          ))}
        </div>
      </div>
      <div className={`showProducts_container__right `}>
        <div className={`showProducts_container__right--products ${display}`}>
          {products?.map((product) => {
            return (
              <ProductCard
                display={display}
                product={product?.attributes}
                key={product?.id}
              />
            );
          })}
        </div>
        <Paginator
          page={page}
          pages={pagesArray}
          setPage={setPage}
          pageCount={meta?.pagination.pageCount}
        />
      </div>
    </div>
  );
};

export default ShopProducts;
