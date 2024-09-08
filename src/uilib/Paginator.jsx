import { useMediaQuery } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { BsArrowRight } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";
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
    isMobile && pages.length >= 4
      ? [1, 2, "...", pages[pages.length - 1]]
      : pages;

  return (
    <div className="paginator__wrapper" {...props}>
      <button
        className="previous_button"
        onClick={() => setPage((prev) => prev - 1)}
        disabled={page == 1}
      >
        {isMobile?<IoIosArrowBack />:paginatePrev}
      </button>
      {displayPages?.map((pg, key) => {
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
        {isMobile?<IoIosArrowForward />:paginateNext}
      </button>
    </div>
  );
};

export default Paginator;
