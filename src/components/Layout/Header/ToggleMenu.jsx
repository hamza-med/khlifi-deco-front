import { useEffect } from "react";
import { LuMenu, LuX } from "react-icons/lu";
const ToggleMenu = ({ showDrawer, isOpen }) => {
  useEffect(() => {
    const root = document.getElementById("root");
    if (typeof window != "undefined" && window.document && isOpen) {
      document.body.style.overflow = "hidden";
      root.style.overflow = "hidden";
    } else {
      document.body.style.overflowX = "hidden";
      document.body.style.overflowY = "unset";
      root.style.overflowX = "hidden";
      root.style.overflowY = "unset";
    }
  }, [isOpen]);

  return (
    <div className="hamburger">
      {isOpen ? (
        <LuX
          onClick={() => {
            showDrawer(false);
          }}
        />
      ) : (
        <LuMenu
          onClick={() => {
            showDrawer(true);
          }}
        />
      )}
    </div>
  );
};

export default ToggleMenu;
