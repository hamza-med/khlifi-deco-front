import { MenuList, MenuItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const SubCatDropDown = ({ closeDrop, list, show, close, catId }) => {
  return (
    <>
      <MenuList
        onMouseEnter={show}
        onMouseLeave={close}
        position="absolute"
        top="100%"
        max-width="300px"
        left="290px"
        borderColor="white"
        boxShadow="sm"
        border="1px solid #fafafa"
        borderRadius="2px"
      >
        {list?.map((item, index) => (
          <MenuItem
            key={index}
            color="#5E4B2F"
            fontWeight="500"
            _hover={{ bgColor: "white", color: "" }}
          >
            <li
              className="menu-item-drop"
              onClick={() => {
                close();
                closeDrop();
              }}
            >
              <Link to={`shop/${catId}?sub=${item?.id}`}>
                {item?.attributes?.title}
              </Link>
            </li>
          </MenuItem>
        ))}
      </MenuList>
    </>
  );
};

export default SubCatDropDown;
