import useFetch from "@/hooks/useFetch";
import CategoryCard from "./CategoryCard";
import { useMediaQuery } from "@chakra-ui/react";
import Slider from "react-slick";

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

  const { data } = useFetch("/categories?populate=*");
  return (
    <div className="home-categories">
      <h1 className="home-categories__title">explorer par catégorie</h1>
      <p className="home-categories__description">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id minima
        dolorum modi similique animi quas labore ab reiciendis, nisi consequatur
        omnis et dignissimos neque delectus odit, quo laboriosam vitae facilis?
      </p>
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
