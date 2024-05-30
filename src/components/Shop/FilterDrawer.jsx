import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";
import PriceFilter from "./PriceFilter";
import SubCategory from "./SubCategory";

//import { useNavigate } from "react-router-dom";

const FilterDrawer = ({
  isOpen,
  onClose,
  handleChange,
  filteredPrice,
  setFilteredPrice,
  subCategories,
  catName,
  selectedSubCats,
  setPage
}) => {
  //const navigate = useNavigate();

  return (
    <Drawer
      isOpen={isOpen}
      placement="left"
      onClose={onClose}
      variant="secondary"
    >
      <DrawerOverlay />
      <DrawerContent
        p="5px 5px"
        height={["100%", "100%", "100%"]}
        maxW={["75%", "100%", "380px"]}
      >
        <DrawerBody>
          <div className="shopProducts_container__left">
            <p className="title">{catName}</p>
            <div className="content">
              {subCategories?.map((item) => {
                return (
                  <SubCategory
                    isChecked={selectedSubCats.includes(item?.id.toString())}
                    handleChange={handleChange}
                    key={item?.id}
                    id={item?.id}
                    name={item?.attributes?.title}
                  />
                );
              })}
              <PriceFilter
                setPage={setPage}
                filteredPrice={filteredPrice}
                setFilteredPrice={setFilteredPrice}
                title="Prix"
              />
            </div>
          </div>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default FilterDrawer;
