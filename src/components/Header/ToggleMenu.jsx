import { useState } from "react";
import { LuMenu, LuX } from "react-icons/lu";
const ToggleMenu = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen((prev) => !prev);
    if (typeof window != "undefined" && window.document && !open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  };
  return (
    <div className="hamburger">
      {open ? <LuX onClick={showDrawer} /> : <LuMenu onClick={showDrawer} />}
    </div>
  );
};

export default ToggleMenu;
