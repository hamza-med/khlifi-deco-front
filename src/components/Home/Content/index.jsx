import Categories from "./Categories";
// import ExploreSection from "./ExploreSection";
import Products from "./Products";
import ExploreSlider from "@/components/ExploreSlider";
const Content = () => {
  return (
    <>
      <div className="home-container">
        <Categories />
        <Products />
      </div>
      <ExploreSlider/>
      {/* <ExploreSection /> */}
    </>
  );
};

export default Content;
