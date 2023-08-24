import Categories from "./Categories";
import ExploreSection from "./ExploreSection";
import Products from "./Products";

const Content = () => {
  return (
    <div className="home-container">
      <Categories />
      <Products />
      <ExploreSection />
    </div>
  );
};

export default Content;
