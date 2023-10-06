import { usePrivateFetch } from "@/hooks/useFetch";
import OrdersTable from "./OrdersTable";
import { useEffect, useState } from "react";
import Paginator from "@/uilib/Paginator";
import PDFHeader from "./PDFHeader";
import PDFFooter from "./PDFFooter";

const PDFFile = ({ date, pageSize, setMax, setDisabled }) => {
  const [page, setPage] = useState(1);

  const { data: orders, meta } = usePrivateFetch(
    `orders?pagination[page]=${page}&pagination[pageSize]=${pageSize}&[filters][creationDate][$eq]=${date
      .toISOString()
      .slice(0, -1)
      .replace("T", " ")}`
  );
  useEffect(() => setDisabled(orders?.length === 0), [orders, setDisabled]);
  setMax(meta?.pagination?.total);
  const pagesArray = Array(meta?.pagination?.pageCount)
    .fill()
    .map((_, index) => index + 1);
  return (
    <>
      <div id="file-to-export" className="pdfFile__wrapper">
        <PDFHeader />
        {orders?.length !== 0 && <OrdersTable orders={orders} />}
        <PDFFooter />
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
