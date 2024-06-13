import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
  VStack,
} from "@chakra-ui/react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import SubCatCollapse from "./SubCatCollapse";

const CatCollapse = ({ showDrawer, list }) => {
  return (
    <AccordionPanel p="15px 10px" className="nav-panel">
      <VStack align="start" gap="10px">
        {list?.map((category) => {
          return category?.attributes.sub_categories?.data.length == 0 ? (
            <Text fontSize="18px" fontWeight="500" key={category.id}>
              <Link
                to={`shop/${category?.id}`}
                onClick={() => showDrawer(false)}
              >
                {category.attributes.title}
              </Link>
            </Text>
          ) : (
            <Accordion allowToggle border="transparent">
              <AccordionItem>
                {({ isExpanded }) => (
                  <>
                    <h2>
                      <AccordionButton
                        p="0"
                        color={isExpanded ? "#ac8f67" : "rgb(40, 39, 37)"}
                        fontWeight="medium"
                        background="transparent !important"
                      >
                        <Box
                          fontSize="18px"
                          textTransform="capitalize"
                          as="span"
                          textAlign="left"
                          mr="10px"
                        >
                          <Link
                            onClick={() => showDrawer(false)}
                            to={`shop/${category?.id}`}
                          >
                            {category.attributes.title}
                          </Link>
                        </Box>
                        {isExpanded ? (
                          <RiArrowDropUpLine size="28px" />
                        ) : (
                          <RiArrowDropDownLine size="28px" />
                        )}
                      </AccordionButton>
                    </h2>
                    <SubCatCollapse
                      catId={category.id}
                      showDrawer={showDrawer}
                      list={category?.attributes.sub_categories?.data}
                    />
                  </>
                )}
              </AccordionItem>
            </Accordion>
          );
        })}
      </VStack>
    </AccordionPanel>
  );
};

export default CatCollapse;
