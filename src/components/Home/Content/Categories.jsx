import useFetch from "@/hooks/useFetch";
import { Skeleton, useMediaQuery } from "@chakra-ui/react";
import Slider from "react-slick";
import { useTranslation } from "react-i18next";
import { lazy, Suspense } from "react";

const settings = {
  dots: false,
  infinite: true,
  lazyLoad: true,
  autoplay: true,
  swipeToSlide: true,
  autoplaySpeed: 2000,
  speed: 1000,
  slidesToShow: 1,
  pauseOnHover: true,
};
const settingsWeb = {
  dots: true,
  infinite: true,
  lazyLoad: true,
  autoplay: false,
  swipeToSlide: true,
  autoplaySpeed: 2000,
  speed: 1000,
  slidesToShow: 4,
  pauseOnHover: true,
};

const CategoryCard = lazy(() => import("./CategoryCard"));

const excluded = ["Collections et Tendances", "Collection and Trends"];
const Categories = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const {
    t,
    i18n: { language },
  } = useTranslation();
  const { catTitle, catDescription } = t("home");

  const { data } = useFetch(
    `/categories?locale=${language}&fields[0]=title&fields[1]=description&populate[img][fields][0]=name&populate[img][fields][1]=url`
  );
  return (
    <div className="home-categories">
      <h1 className="home-categories__title">{catTitle}</h1>
      <p className="home-categories__description">{catDescription}</p>
      <div className="home-categories__images">
        {!isMobile ? (
          data?.length <= 4 ? (
            data
              ?.filter((item) => !excluded.includes(item?.attributes?.title))
              .map((item) => {
                return (
                  <Suspense
                    key={item?.id}
                    fallback={
                      <Skeleton height={["350px", "400px"]} width={["300px"]} />
                    }
                  >
                    <CategoryCard item={item} id={item?.id} />
                  </Suspense>
                );
              })
          ) : (
            <div className="slider-container">
              <Slider {...settingsWeb}>
                {data?.map((item) => {
                  return (
                    <Suspense
                      key={item?.id}
                      fallback={<Skeleton height={["350px", "400px"]} />}
                    >
                      <CategoryCard item={item} id={item?.id} />
                    </Suspense>
                  );
                })}
              </Slider>
            </div>
          )
        ) : (
          <div className="slider-container">
            <Slider {...settings}>
              {data?.map((item) => {
                return (
                  <Suspense
                    key={item?.id}
                    fallback={<Skeleton height={["350px", "400px"]} />}
                  >
                    <CategoryCard item={item} id={item?.id} />
                  </Suspense>
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
