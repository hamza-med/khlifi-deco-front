import {
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import { useState } from "react";
import SearchInput from "@/uilib/SearchInput";
import SearchResults from "./SearchResults";
import useFetch from "@/hooks/useFetch";

const SearchModal = ({ isOpen, onClose }) => {
  const [value, setValue] = useState();
  const { data: products } = useFetch(
    `/products?&[filters][title][$contains]=${value}&populate=*`
  );

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w={["94%", "90%", "600px"]} minH={["60%", "90%", "68px"]}>
          <ModalBody display="flex" flexDir="column" justifyContent="center">
            <SearchInput onChange={setValue} />
            <Divider />
            <SearchResults results={products} onClose={onClose} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SearchModal;
