import { usePrivateFetch } from "@/hooks/useFetch";
import OrdersTable from "./OrdersTable";
import { useCallback, useEffect, useMemo, useState } from "react";
import Paginator from "@/uilib/Paginator";
import PDFHeader from "./PDFHeader";
import PDFFooter from "./PDFFooter";

const PDFFile = ({
  selectedUser,
  user,
  date,
  pageSize,
  setMax,
  setDisabled,
}) => {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const { data: productsData } = usePrivateFetch(
    `orders?fields[0]=products&pagination[page]=${page}&${
      pageSize && `pagination[pageSize]=${pageSize}`
    }&filters[email]=${user}&filters[creationDate][$eq]=${date
      .toISOString()
      .slice(0, -1)
      .replace("T", " ")}`
  );

  const calculateDaysDifference = useCallback((start, end) => {
    const startDate = new Date(start.split("/").reverse().join("-"));
    const endDate = new Date(end.split("/").reverse().join("-"));
    const differenceInTime = endDate - startDate;
    const differenceInDays = differenceInTime / (1000 * 3600 * 24);
    return differenceInDays + 1;
  }, []);

  useEffect(() => {
    const allProducts = [];
    productsData?.forEach((item) => {
      const withDays = item.attributes.products.map((product) => {
        const daysDifference = calculateDaysDifference(
          product?.start,
          product?.end
        );

        return { ...product, days: daysDifference };
      });
      allProducts.push(...withDays);
    });
    setProducts(allProducts);
  }, [calculateDaysDifference, productsData]);
  console.log("products", products);
  const { data: orders, meta } = usePrivateFetch(
    `orders?pagination[page]=${page}&${
      pageSize && `pagination[pageSize]=${pageSize}`
    }&filters[creationDate][$eq]=${date
      .toISOString()
      .slice(0, -1)
      .replace("T", " ")}`
  );

  useEffect(() => setDisabled(orders?.length === 0), [orders, setDisabled]);
  const total = useMemo(
    () =>
      products?.reduce(
        (total, item) => total + item.price * item.quantity * item.days,
        0
      ),
    [products]
  );
  setMax(meta?.pagination?.total);
  const pagesArray = Array(meta?.pagination?.pageCount)
    .fill()
    .map((_, index) => index + 1);
  return (
    <>
      <div id="file-to-export" className="pdfFile__wrapper">
        <PDFHeader selectedUser={selectedUser} />
        {products?.length !== 0 && (
          <OrdersTable total={total} products={products} />
        )}
        <PDFFooter total={total} />
      </div>
      {pagesArray?.length > 1 && (
        <Paginator
          style={{ width: "fit-content", margin: "10px auto" }}
          page={page}
          pages={pagesArray}
          setPage={setPage}
          pageCount={meta?.pagination.pageCount}
        />
      )}
    </>
  );
};

export default PDFFile;
