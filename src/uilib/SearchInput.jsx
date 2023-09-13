import { useDebounce } from "@/hooks/useDebounce";
import { useEffect } from "react";
import { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";

const SearchInput = ({ onChange }) => {
  const [input, setInput] = useState("");
  const [value, setValue] = useState();

  useDebounce(input, setValue, 1000);
  useEffect(() => {
    onChange(value);
  }, [onChange, value]);
  return (
    <div className="input-wrapper">
      <AiOutlineSearch id="search-icon" />
      <input
        className="search-input"
        placeholder="Rechercher un produit"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
