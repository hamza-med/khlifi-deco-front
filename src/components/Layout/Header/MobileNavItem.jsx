import CatCollapse from "@/components/CatCollapse";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  Box,
} from "@chakra-ui/react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const MobileNavItem = ({ showDrawer, categories, isMenu, title, to }) => {
  return !isMenu ? (
    <li
      className="menu-item"
      onClick={() => showDrawer(false)}
      style={{ color: "rgba(0, 0, 0, 0.9)" }}
    >
      <Link to={to} className="link">
        <span>{title}</span>
      </Link>
    </li>
  ) : (
    <Accordion allowToggle border="transparent" width="100%">
      <AccordionItem>
        {({ isExpanded }) => (
          <>
            <h2>
              <AccordionButton
                p="0"
                color={isExpanded ? "#ac8f67" : "rgba(0, 0, 0, 0.9)"}
                fontWeight="medium"
                background="transparent !important"
              >
                <Box as="span" textAlign="center" fontSize="18px" mr="auto">
                  <Link onClick={() => showDrawer(false)} to={to}>
                    {title}
                  </Link>
                </Box>
                {isExpanded ? (
                  <RiArrowDropUpLine size="28px" />
                ) : (
                  <RiArrowDropDownLine size="28px" />
                )}
              </AccordionButton>
            </h2>
            <CatCollapse showDrawer={showDrawer} list={categories} />
          </>
        )}
      </AccordionItem>
    </Accordion>
  );
};

export default MobileNavItem;
