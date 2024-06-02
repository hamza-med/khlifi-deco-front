import LanguageMenu from "@/components/LanguageMenu";
import { Button, Menu, MenuButton } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const Language = () => {
  const { i18n } = useTranslation();

  return (
    <Menu placement="bottom-end" width="fit-content">
      <MenuButton>
        <Button
          padding="0.5em"
          color="white"
          fontSize="1rem"
          textTransform="uppercase"
          bgColor="#282725"
        >
          {i18n.language}
        </Button>
      </MenuButton>
      <LanguageMenu />
    </Menu>
  );
};

export default Language;
