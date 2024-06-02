import { useTranslation } from "react-i18next";

const Paginator = ({
  pages,
  page = 1,
  setPage,
  isPreviousData,
  pageCount,
  ...props
}) => {
  const { t } = useTranslation();
  const { paginateNext, paginatePrev } = t("shop");
  return (
    <div className="paginator__wrapper" {...props}>
      <button
        className="previous_button"
        onClick={() => setPage((prev) => prev - 1)}
        disabled={page == 1}
      >
        {paginatePrev}
      </button>
      {pages?.map((pg, key) => {
        return (
          <button
            className={`page_button ${pg === page ? "active" : ""}`}
            onClick={() => setPage(pg)}
            key={key}
            disabled={isPreviousData}
          >
            {pg}
          </button>
        );
      })}
      <button
        className="next_button"
        disabled={page === pageCount}
        onClick={() => setPage((prev) => prev + 1)}
      >
        {paginateNext}
      </button>
    </div>
  );
};

export default Paginator;
