import Categories from "./Categories";
import ExploreSection from "./ExploreSection";
import Products from "./Products";

const Content = () => {
  return (
    <>
      <div className="home-container">
        <Categories />
        <Products />
      </div>
      <ExploreSection />
    </>
  );
};

export default Content;
