import NavbarItem from "@/components/Layout/Header/NavbarItem";
import { useAuthContext } from "@/hooks/useAuthContext";

const Navbar = ({ categories }) => {
  const { user } = useAuthContext();

  return (
    <nav className="navbar">
      <ul className="menu" role="list">
        {categories?.map((item) => {
          return (
            <NavbarItem item={item?.attributes} id={item?.id} key={item?.id} />
          );
        })}
        {user?.email === "utilisation13@gmail.com" && (
          <button className="header-button">Dashboard</button>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
