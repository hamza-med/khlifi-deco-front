import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Header from "@/components/Layout/Header";
import Home from "@/pages/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/Layout/Footer";
import Shop from "./pages/Shop";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import RouteProtector from "./components/RouteProtector";
import { useEffect } from "react";
import { useMediaQuery } from "@chakra-ui/react";
import Contact from "./pages/Contact";
const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const App = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const root = document.getElementById("root");
  useEffect(() => {
    if (isMobile) {
      root.style.overflowX = "hidden";
      document.body.style.overflowX = "hidden";
    }
  }, [isMobile, root.style]);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="shop/:catId" element={<Shop />}>
            <Route path="sub/:subId" element={<Shop />} />
          </Route>
          <Route path="shop/product/:productId" element={<ProductDetail />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="contact" element={<Contact />} />
          <Route path="dashboard" element={<RouteProtector />}>
            <Route path="" element={<Dashboard />} />
          </Route>
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
