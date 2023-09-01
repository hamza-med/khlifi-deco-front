import useFetch from "@/hooks/useFetch";
import CategoryCard from "./CategoryCard";

const Categories = () => {
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
        {data
          ?.filter(
            (item) => item?.attributes?.title !== "Collections et Tendances"
          )
          .map((item) => {
            return <CategoryCard item={item} id={item?.id} key={item?.id} />;
          })}
      </div>
    </div>
  );
};

export default Categories;
