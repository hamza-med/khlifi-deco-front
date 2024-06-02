import { useDebounce } from "@/hooks/useDebounce";
import { useEffect } from "react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineSearch } from "react-icons/ai";

const SearchInput = ({ onChange }) => {
  const [input, setInput] = useState("");
  const [value, setValue] = useState();
  const { t } = useTranslation();
  useDebounce(input, setValue, 1000);
  useEffect(() => {
    onChange(value);
  }, [onChange, value]);
  return (
    <div className="input-wrapper">
      <AiOutlineSearch id="search-icon" />
      <input
        className="search-input"
        placeholder={t("searchProduct")}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
