import { useAuthContext } from "@/hooks/useAuthContext";
import { lazy } from "react";
import { useNavigate } from "react-router-dom";
const NavbarItem = lazy(() => import("@/components/Layout/Header/NavbarItem"));

const Navbar = ({ categories, navList }) => {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <ul className="menu" role="list">
        {navList?.map((item) => {
          return (
            <NavbarItem
              isMenu={item.isMenu}
              categories={categories}
              to={item?.to}
              title={item?.title}
              key={item?.id}
            />
          );
        })}
        {user?.email === "utilisation13@gmail.com" && (
          <button
            className="header-button"
            onClick={() => navigate("/dashboard")}
          >
            Dashboard
          </button>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
