import { MenuList } from "@chakra-ui/react";
import MenuItem from "./MenuItem";
const CatDropDown = ({ list, showDrop, closeDrop }) => {
  return (
    <>
      <MenuList
        onMouseEnter={showDrop}
        onMouseLeave={closeDrop}
        minW="300px"
        position="absolute"
        top="100px"
        borderColor="white"
        border="1px solid #fafafa"
        borderRadius="2px"
      >
        {list?.map((item) => {
          return <MenuItem item={item} key={item.id} closeDrop={closeDrop} />;
        })}
      </MenuList>
    </>
  );
};

export default CatDropDown;
