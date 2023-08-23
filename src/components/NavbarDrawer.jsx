import NavButton from "@/uilib/NavButton";
import { menuItems } from "./data/menuItems";
import NavbarItem from "./Layout/Header/NavbarItem";
import { BiPhoneCall } from "react-icons/bi";

import { GrFacebook, GrInstagram } from "react-icons/gr";

const NavbarDrawer = ({ isOpen }) => {
  return (
    <div className={isOpen ? `nav-drawer active` : `nav-drawer`}>
      <div className="nav-drawer-content">
        {menuItems.map((menu, index) => {
          return <NavbarItem item={menu} key={index} />;
        })}
        <NavButton drawerOpened={isOpen}>voir les plans</NavButton>
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
