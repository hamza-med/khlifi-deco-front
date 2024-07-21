import { AccordionPanel, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const SubCatCollapse = ({ showDrawer, catId, list }) => {
  return (
    <AccordionPanel p="15px 0px 15px 10px" className="nav-panel-1">
      <VStack align="start" gap="1em">
        {list?.map((subCategory) => (
          <Text
            fontSize="18px"
            textTransform="capitalize"
            fontWeight="500"
            key={subCategory.id}
            color="rgba(0,0,0,0.75)"
          >
            <Link
              to={`shop/${catId}?sub=${subCategory?.id}`}
              onClick={() => showDrawer(false)}
            >
              {subCategory.attributes.title}
            </Link>
          </Text>
        ))}
      </VStack>
    </AccordionPanel>
  );
};

export default SubCatCollapse;
