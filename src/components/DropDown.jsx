import { MenuList, MenuItem } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const DropDown = ({ list, show, close }) => {
  return (
    <div onMouseEnter={show} onMouseLeave={close}>
      <MenuList
        position="absolute"
        top="50px"
        borderColor="white"
        boxShadow="sm"
        border="1px solid #fafafa"
        borderRadius="2px"
      >
        {list.map((item, index) => (
          <MenuItem
            key={index}
            color="#5E4B2F"
            _hover={{ bgColor: "white", color: "" }}
          >
            <Link to={item.url}>{item.title}</Link>
          </MenuItem>
        ))}
      </MenuList>
    </div>
  );
};

export default DropDown;
