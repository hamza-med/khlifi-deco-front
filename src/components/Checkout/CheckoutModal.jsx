import {
  Checkbox,
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

const CheckoutModal = ({ checked, isOpen, onClose, handleChange }) => {
  const { t } = useTranslation();
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent borderRadius="0px" minW={["100%", "100%", "fit-content"]}>
        <ModalHeader
          fontSize={["18px", "20px"]}
          color="rgba(0,0,0,0.9)"
          fontWeight="600"
        >
          {t("checkout.modalityTitle")}
        </ModalHeader>
        <ModalCloseButton color="rgba(0,0,0,0.4)" />
        <ModalBody
          textAlign="justify"
          maxW={["100%", "800px"]}
          fontSize={["16px", "18px"]}
          color="rgba(0,0,0,0.8)"
        >
          <p>{t("checkout.modalityDesc")}</p>
          <HStack textAlign="start" mt="20px" pb="16px">
            <Text fontWeight="500" textDecor="underline">
              {t("checkout.modalityAccepted")}
            </Text>
            <Checkbox
              isChecked={checked}
              ml="auto"
              borderColor="rgba(0,0,0,0.6)"
              size="lg"
              type="checkbox"
              onChange={(e) => handleChange(e.target.checked)}
            />
          </HStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CheckoutModal;
