import { useEffect } from "react";
import { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import DropDown from "../../DropDown";
import { useDisclosure, Menu } from "@chakra-ui/react";

export default function NavbarItem({ item, id, showDrawer, isDrawerOpen }) {
  const [specialItem, setIsSpecial] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    setIsSpecial(
      item?.title === "Collections et Tendances" ||
        item?.title === "Collection and Trends"
    );
  }, [item.title]);

  return (
    <li
      className="menu-item"
      key={id}
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
    >
      <Link
        to={`shop/${id}`}
        className={specialItem ? "link new-item" : "link"}
      >
        <span
          style={isDrawerOpen ? { fontSize: "18px" } : null}
          onClick={() => {
            showDrawer(false);
            onClose();
          }}
        >
          {item?.title}
        </span>
        {item?.sub_categories?.data?.length !== 0 ? (
          !isOpen ? (
            <RiArrowDropDownLine
              size={isDrawerOpen ? "40px" : "28px"}
              onClick={onOpen}
              className={specialItem ? "new-item-svg" : ""}
            />
          ) : (
            <RiArrowDropUpLine
              size={isDrawerOpen ? "40px" : "28px"}
              className={specialItem ? "new-item-svg" : ""}
              onClick={onClose}
            />
          )
        ) : null}
      </Link>
      {item?.sub_categories && (
        <Menu isOpen={isOpen}>
          <DropDown
            list={item?.sub_categories?.data}
            show={onOpen}
            close={onClose}
            showDrawer={showDrawer}
            catId={id}
          />
        </Menu>
      )}
      {specialItem && <span className="badge">New</span>}
    </li>
  );
}
