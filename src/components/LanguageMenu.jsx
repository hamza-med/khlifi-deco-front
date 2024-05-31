import { MenuItem, MenuList, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", lang: "English" },
  { code: "fr", lang: "French" },
];

const LanguageMenu = () => {
  const { i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <MenuList
      borderColor="white"
      borderRadius="none"
      fontSize={["0.98rem", "1rem", "1rem"]}
    >
      {languages.map((lng) => {
        return (
          <MenuItem
            onClick={() => changeLanguage(lng.code)}
            key={lng.code}
            _hover={{ bgColor: "rgba(0,0,0,0.02)" }}
            _focus={{ bgColor: "rgba(0,0,0,0.02)" }}
          >
            <Text>{lng.lang}</Text>
          </MenuItem>
        );
      })}
    </MenuList>
  );
};

export default LanguageMenu;
