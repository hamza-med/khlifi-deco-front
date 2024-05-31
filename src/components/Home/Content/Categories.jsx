import useFetch from "@/hooks/useFetch";
import CategoryCard from "./CategoryCard";
import { useMediaQuery } from "@chakra-ui/react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";

const settings = {
  dots: false,
  infinite: true,
  lazyLoad: true,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 1000,
  slidesToShow: 1,
  slidesToScroll: 1,
  pauseOnHover: true,
};

const Categories = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const { t } = useTranslation();
  const { catTitle, catDescription } = t("home");
  const { data } = useFetch(
    "/categories?fields[0]=title&fields[1]=description&populate[img][fields][0]=name&populate[img][fields][1]=url"
  );
  return (
    <div className="home-categories">
      <h1 className="home-categories__title">{catTitle}</h1>
      <p className="home-categories__description">{catDescription}</p>
      <div className="home-categories__images">
        {!isMobile ? (
          data
            ?.filter(
              (item) => item?.attributes?.title !== "Collections et Tendances"
            )
            .map((item) => {
              return <CategoryCard item={item} id={item?.id} key={item?.id} />;
            })
        ) : (
          <div className="slider-container">
            <Slider {...settings}>
              {data?.map((item) => {
                return (
                  <CategoryCard item={item} id={item?.id} key={item?.id} />
                );
              })}
            </Slider>
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;
