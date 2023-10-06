import { Divider, HStack, VStack } from "@chakra-ui/react";

const PDFFooter = () => {
  return (
    <div>
      <VStack align="start" fontSize="1.2rem" fontWeight="500" gap="8px">
        <p>Ce devis est arreté à la somme de...</p>
        <p>
          Nous restons à votre disposition pour toute information
          complémentaire.
        </p>
        <p>Cordialement,</p>
      </VStack>
      <HStack
        justify="space-between "
        fontSize="1.2rem"
        fontWeight="500"
        mt="8px"
      >
        <p>Date:</p> <p style={{ marginRight: "10px" }}>Signature:</p>
      </HStack>
      <VStack
        align="start"
        fontSize="1.2rem"
        fontWeight="500"
        gap="8px"
        mt="60px"
      >
        <p>Conditions et modalités de paiement</p>
        <Divider />
        <p>Paiement par chéque ou en espéces</p>
        <p>40% à la commande</p>
      </VStack>
    </div>
  );
};

export default PDFFooter;
