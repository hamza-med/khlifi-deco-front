import Categories from "./Categories";
import ExploreSection from "./ExploreSection";
import Products from "./Products";

const Content = ({productsRef}) => {
  return (
    <>
      <div className="home-container">
        <Categories />
        <Products ref={productsRef} />
      </div>
      <ExploreSection />
    </>
  );
};

export default Content;
