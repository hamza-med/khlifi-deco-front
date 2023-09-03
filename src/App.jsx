import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Header from "@/components/Layout/Header";
import Home from "@/pages/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Layout/Footer";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "shop/:catId",
        element: <Shop />,
        children: [{ path: "sub/:subId", element: <Shop /> }],
      },
      {
        path: "shop/product/:productId",
        element: <ProductDetail />,
      },
    ],
  },
]);

const App = () => (
  <>
    <RouterProvider router={router} />
  </>
);

export default App;
