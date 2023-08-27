import Content from "@/components/Home/Content";
import Slider from "@/components/Home/Slider";
import { useRef } from "react";

const Home = () => {
  const productsRef = useRef(null);

  return (
    <>
      <Slider productsRef={productsRef} />
      <Content productsRef={productsRef} />
    </>
  );
};

export default Home;
