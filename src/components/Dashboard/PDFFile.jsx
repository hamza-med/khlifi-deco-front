import { usePrivateFetch } from "@/hooks/useFetch";
import OrdersTable from "./OrdersTable";
import { useState } from "react";
import Paginator from "@/uilib/Paginator";
import PDFHeader from "./PDFHeader";

const PDFFile = ({ date, pageSize, setMax }) => {
  const [page, setPage] = useState(1);

  const { data: orders, meta } = usePrivateFetch(
    `orders?pagination[page]=${page}&pagination[pageSize]=${pageSize}&[filters][creationDate][$eq]=${date
      .toISOString()
      .slice(0, -1)
      .replace("T", " ")}`
  );
  setMax(meta?.pagination?.total);
  const pagesArray = Array(meta?.pagination?.pageCount)
    .fill()
    .map((_, index) => index + 1);
  return (
    <>
      <div id="file-to-export" className="pdfFile__wrapper">
        <PDFHeader />
        <OrdersTable orders={orders} />
      </div>
      {pagesArray?.length > 1 && (
        <Paginator
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
