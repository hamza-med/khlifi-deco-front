import { useEffect } from "react";
import { useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import DropDown from "../../DropDown";
import { useDisclosure, Menu } from "@chakra-ui/react";

export default function NavbarItem({ item, key, id }) {
  const [specialItem, setIsSpecial] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    setIsSpecial(item?.title === "Collections et Tendances");
  }, [item.title]);

  return (
    <li
      className="menu-item"
      key={key}
      onMouseEnter={onOpen}
      onMouseLeave={onClose}
      onClick={!onOpen}
    >
      <Link
        to={`shop/${id}`}
        className={specialItem ? "link new-item" : "link"}
      >
        {item?.title}
        {item?.sub_categories?.data?.length !== 0 ? (
          !isOpen ? (
            <RiArrowDropDownLine
              className={specialItem ? "new-item-svg" : ""}
            />
          ) : (
            <RiArrowDropUpLine className={specialItem ? "new-item-svg" : ""} />
          )
        ) : null}
      </Link>
      {item?.sub_categories && (
        <Menu isOpen={isOpen}>
            <DropDown
            list={item?.sub_categories?.data}
            show={onOpen}
            close={onClose}
            catId={id}
          />
        </Menu>
      )}
      {specialItem && <span className="badge">New</span>}
    </li>
  );
}
