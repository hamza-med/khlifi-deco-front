import {
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
} from "@chakra-ui/react";
import { useState } from "react";
import Input from "../../../../uilib/Input";
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
        <ModalContent minW="600px" minH="68px">
          <ModalBody display="flex" flexDir="column" justifyContent="center">
            <Input onChange={setValue} />
            <Divider />
            <SearchResults results={products} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SearchModal;
