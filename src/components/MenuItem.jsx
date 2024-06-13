import { MenuItem as Item, useDisclosure, Menu } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { RiArrowDropDownLine, RiArrowDropRightLine } from "react-icons/ri";
import SubCatDropDown from "./SubCatDropDown";

const MenuItem = ({ item, closeDrop }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Item
      width="300px"
      color="#5E4B2F"
      fontWeight="500"
      onMouseEnter={() => {
        item?.attributes.sub_categories?.data.length !== 0 && onOpen();
      }}
      onMouseLeave={onClose}
      _hover={{ bgColor: "white", color: "" }}
    >
      <li className="menu-item-drop" onClick={closeDrop}>
        <Link className="link" to={`shop/${item?.id}`}>
          <span>{item?.attributes?.title}</span>
          {item?.attributes.sub_categories?.data?.length !== 0 ? (
            !isOpen ? (
              <RiArrowDropDownLine size="28px" onClick={onOpen} />
            ) : (
              <RiArrowDropRightLine size="28px" onClick={onClose} />
            )
          ) : null}
        </Link>
        {item?.attributes.sub_categories?.data.length !== 0 ? (
          <Menu isOpen={isOpen}>
            <SubCatDropDown
              closeDrop={closeDrop}
              list={item?.attributes.sub_categories?.data}
              show={onOpen}
              close={onClose}
              catId={item.id}
            />
          </Menu>
        ) : null}
      </li>
    </Item>
  );
};

export default MenuItem;
