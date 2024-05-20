import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

const CheckoutModal = ({ isOpen, onClose }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent
        borderRadius="0px"
        minW={["100%", "100%", "fit-content"]}
        minH={["60%", "68px", "68px"]}
      >
        <ModalHeader></ModalHeader>
        <ModalCloseButton color="rgba(0,0,0,0.4)" />
        <ModalBody></ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CheckoutModal;
