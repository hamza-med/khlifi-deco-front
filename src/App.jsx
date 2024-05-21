import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Suspense, lazy, useEffect } from "react";
import { Spinner, useMediaQuery } from "@chakra-ui/react";

const Footer = lazy(() => import("@/components/Layout/Footer"));
const Header = lazy(() => import("@/components/Layout/Header"));
const Home = lazy(() => import("@/pages/Home"));
const Shop = lazy(() => import("@/pages/Shop"));
const ProductDetail = lazy(() => import("@/pages/ProductDetail"));
const Cart = lazy(() => import("@/pages/Cart"));
const Checkout = lazy(() => import("@/pages/Checkout"));
const Register = lazy(() => import("@/pages/Register"));
const Login = lazy(() => import("@/pages/Login"));
const Dashboard = lazy(() => import("@/pages/Dashboard"));
const Contact = lazy(() => import("@/pages/Contact"));
const RouteProtector = lazy(() => import("@/components/RouteProtector"));

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
          <Route
            path="/"
            element={
              <Suspense fallback={<Spinner />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="shop/:catId"
            element={
              <Suspense fallback={<Spinner />}>
                <Shop />
              </Suspense>
            }
          >
            <Route
              path="sub/:subId"
              element={
                <Suspense fallback={<Spinner />}>
                  <Shop />
                </Suspense>
              }
            />
          </Route>
          <Route
            path="shop/product/:productId"
            element={
              <Suspense fallback={<Spinner />}>
                <ProductDetail />
              </Suspense>
            }
          />
          <Route
            path="cart"
            element={
              <Suspense fallback={<Spinner />}>
                <Cart />
              </Suspense>
            }
          />
          <Route
            path="checkout"
            element={
              <Suspense fallback={<Spinner />}>
                <Checkout />
              </Suspense>
            }
          />
          <Route
            path="register"
            element={
              <Suspense fallback={<Spinner />}>
                <Register />
              </Suspense>
            }
          />
          <Route
            path="login"
            element={
              <Suspense fallback={<Spinner />}>
                <Login />
              </Suspense>
            }
          />
          <Route
            path="contact"
            element={
              <Suspense fallback={<Spinner />}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="dashboard"
            element={
              <Suspense fallback={<Spinner />}>
                <RouteProtector />
              </Suspense>
            }
          >
            <Route
              path=""
              element={
                <Suspense fallback={<Spinner />}>
                  <Dashboard />
                </Suspense>
              }
            />
          </Route>
          <Route
            path="*"
            element={
              <Suspense fallback={<Spinner />}>
                <Home />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
