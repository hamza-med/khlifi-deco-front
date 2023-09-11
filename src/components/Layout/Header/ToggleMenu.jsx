import { LuMenu, LuX } from "react-icons/lu";
const ToggleMenu = ({ showDrawer, isOpen }) => {
  const openDrawer = () => {
    showDrawer((prev) => !prev);
    const root = document.getElementById("root");
    if (typeof window != "undefined" && window.document && !isOpen) {
      document.body.style.overflow = "hidden";
      root.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
      root.style.overflow = "unset";
    }
  };
  return (
    <div className="hamburger">
      {isOpen ? <LuX onClick={openDrawer} /> : <LuMenu onClick={openDrawer} />}
    </div>
  );
};

export default ToggleMenu;
