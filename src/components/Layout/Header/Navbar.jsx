import NavbarItem from "@/components/Layout/Header/NavbarItem";

const Navbar = ({ categories }) => {
  return (
    <nav className="navbar">
      <ul className="menu" role="list">
        {categories?.map((item) => {
          return (
            <NavbarItem item={item?.attributes} id={item?.id} key={item?.id} />
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
