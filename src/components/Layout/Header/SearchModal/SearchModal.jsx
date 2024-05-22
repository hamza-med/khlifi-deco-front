import {
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Spinner,
} from "@chakra-ui/react";
import { Suspense, lazy, useState } from "react";

import useFetch from "@/hooks/useFetch";

const SearchInput = lazy(() => import("@/uilib/SearchInput"));
const SearchResults = lazy(() => import("./SearchResults"));

const SearchModal = ({ isOpen, onClose }) => {
  const [value, setValue] = useState();
  const { data: products } = useFetch(
    `/products?&[filters][title][$containsi]=${value}&populate=*`
  );

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w={["94%", "90%", "600px"]} minH={["60%", "90%", "68px"]}>
          <ModalBody display="flex" flexDir="column" justifyContent="center">
            <Suspense fallback={<div>Loading...</div>}>
              <SearchInput onChange={setValue} />
            </Suspense>
            <Divider />
            <Suspense fallback={<Spinner />}>
              <SearchResults results={products} onClose={onClose} />
            </Suspense>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SearchModal;
