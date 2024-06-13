import { AccordionPanel, Text, VStack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const SubCatCollapse = ({ showDrawer, catId, list }) => {
  return (
    <AccordionPanel p="15px">
      <VStack align="start" gap="10px">
        {list?.map((subCategory) => (
          <Text fontWeight="500" key={subCategory.id}>
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
