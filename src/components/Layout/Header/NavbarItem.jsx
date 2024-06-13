import { lazy } from "react";

import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { Link } from "react-router-dom";

import { useDisclosure, Menu } from "@chakra-ui/react";

const CatDropDown = lazy(() => import("../../CatDropDown"));

export default function NavbarItem({
  categories,
  isMenu,
  title,
  to,
  isDrawerOpen,
}) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <li className="menu-item" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <Link to={to} className="link">
        <span style={isDrawerOpen ? { fontSize: "18px" } : null}>{title}</span>
        {isMenu ? (
          !isOpen ? (
            <RiArrowDropDownLine size="28px" onClick={onOpen} />
          ) : (
            <RiArrowDropUpLine size="28px" onClick={onClose} />
          )
        ) : null}
      </Link>
      {isMenu && (
        <Menu isOpen={isOpen}>
          <CatDropDown
            list={categories}
            showDrop={onOpen}
            closeDrop={onClose}
          />
        </Menu>
      )}
    </li>
  );
}
