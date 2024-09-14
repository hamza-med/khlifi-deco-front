import { useMediaQuery } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Paginator = ({
  pages,
  page = 1,
  setPage,
  isPreviousData,
  pageCount,
  ...props
}) => {
  const { t } = useTranslation();
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  const { paginateNext, paginatePrev } = t("shop");
  const displayPages =
    isMobile && pages.length > 5
      ? [1, 2, 3, "...", pages[pages.length - 1]]
      : pages;

  return (
    <div className="paginator__wrapper" {...props}>
      <button
        className="previous_button"
        onClick={() => setPage((prev) => prev - 1)}
        disabled={page == 1}
      >
        {isMobile ? <IoIosArrowBack style={{ width: "20px" }} /> : paginatePrev}
      </button>
      {displayPages?.map((pg, key) => {
        return (
          <button
            className={
              pg !== "..." ? `page_button ${pg === page ? "active" : ""}` : null
            }
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
        {isMobile ? (
          <IoIosArrowForward style={{ width: "20px" }} />
        ) : (
          paginateNext
        )}
      </button>
    </div>
  );
};

export default Paginator;
