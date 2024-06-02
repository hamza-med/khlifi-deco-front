import {
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Skeleton,
} from "@chakra-ui/react";
import { Suspense, lazy, useState } from "react";

import useFetch from "@/hooks/useFetch";
import { useTranslation } from "react-i18next";

const SearchInput = lazy(() => import("@/uilib/SearchInput"));
const SearchResults = lazy(() => import("./SearchResults"));

const SearchModal = ({ isOpen, onClose }) => {
  const {
    i18n: { language },
  } = useTranslation();
  const [value, setValue] = useState();
  const { data: products } = useFetch(
    `/products?locale=${language}&fields[0]=title&[filters][title][$containsi]=${value}`
  );

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent w={["94%", "90%", "600px"]} minH={["60%", "90%", "68px"]}>
          <ModalBody display="flex" flexDir="column" justifyContent="center">
            <Suspense fallback={<Skeleton />}>
              <SearchInput onChange={setValue} />
            </Suspense>
            <Divider />
            <Suspense fallback={<Skeleton />}>
              <SearchResults results={products} onClose={onClose} />
            </Suspense>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SearchModal;
