import NavbarItem from "./Layout/Header/NavbarItem";
import { BiPhoneCall } from "react-icons/bi";

import { GrFacebook, GrInstagram } from "react-icons/gr";
import { useRef } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";

const NavbarDrawer = ({ isOpen, categories, showDrawer }) => {
  const wrapperRef = useRef(null);

  useClickOutside(wrapperRef, () => showDrawer(false));
  return (
    <div
      className={isOpen ? `nav-drawer active` : `nav-drawer`}
      ref={wrapperRef}
    >
      <div className="nav-drawer-content">
        {categories?.map((item) => {
          return (
            <NavbarItem
              item={item?.attributes}
              key={item?.id}
              id={item?.id}
              showDrawer={showDrawer}
              isDrawerOpen={isOpen}
            />
          );
        })}
        {/* <NavButton drawerOpened={isOpen}>voir les plans</NavButton> */}
      </div>
      <div className="nav-drawer-footer">
        <div className="nav-drawer-contact">
          <BiPhoneCall className="drawer-phoneIcon" />
          <p>+216 50 577 433</p>
        </div>
        <div className="nav-social">
          <a href="https://google.com">
            <GrFacebook />
          </a>
          <a>
            <GrInstagram style={{ fontSize: "1.7rem" }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavbarDrawer;
