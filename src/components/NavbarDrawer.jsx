import { BiPhoneCall } from "react-icons/bi";

import { GrFacebook, GrInstagram, GrLinkedin } from "react-icons/gr";
import { useRef } from "react";
import { useClickOutside } from "@/hooks/useClickOutside";
import MobileNavItem from "./Layout/Header/MobileNavItem";
import { Link } from "react-router-dom";

const NavbarDrawer = ({ navList, isOpen, categories, showDrawer }) => {
  const wrapperRef = useRef(null);

  useClickOutside(wrapperRef, () => showDrawer(false));
  return (
    <div
      className={isOpen ? `nav-drawer active` : `nav-drawer`}
      ref={wrapperRef}
    >
      <div className="nav-drawer-content">
        {navList?.map((item) => {
          return (
            <MobileNavItem
              showDrawer={showDrawer}
              isMenu={item.isMenu}
              categories={categories}
              to={item?.to}
              title={item?.title}
              key={item?.id}
            />
          );
        })}
        {/* <NavButton drawerOpened={isOpen}>voir les plans</NavButton> */}
      </div>
      <div className="nav-drawer-footer">
        <div className="nav-drawer-contact">
          <BiPhoneCall className="drawer-phoneIcon" />
          <p>+216 21 453 379</p>
        </div>
        <div className="nav-social">
          <Link to="https://www.facebook.com/profile.php?id=61559900512195&mibextid=LQQJ4d">
            <GrFacebook className="nav-social--1" />
          </Link>
          <Link to="https://www.instagram.com/khelifi_conseils">
            <GrInstagram className="nav-social--2" />
          </Link>
          <Link to="https://www.linkedin.com/in/khelifi-conseils-et-services">
            <GrLinkedin className="nav-social--3" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarDrawer;
