import { HStack, Text, VStack } from "@chakra-ui/react";

const PDFHeader = ({ selectedUser }) => {
 
  return (
    <VStack align="start" mb="80px">
      <HStack justify="space-between" w="80%">
        <Text>LOGO</Text>
        <Text fontSize="2.8rem" fontWeight="bold">
          Devis
        </Text>
      </HStack>
      <HStack justify="space-between" w="82%">
        <VStack align="start">
          <HStack>
            <Text fontWeight="bold">Facturé à:</Text>
            <Text>
              {selectedUser &&
                `${selectedUser?.firstname} ${selectedUser?.lastname}`}
            </Text>
          </HStack>
          <HStack>
            <Text fontWeight="600">Adresse:</Text>
            <Text>
              {selectedUser &&
                `${selectedUser?.address.state} ${selectedUser?.address.city}, ${selectedUser?.address.postal}`}
            </Text>
          </HStack>
        </VStack>
        <VStack align="start">
          <HStack>
            <Text fontWeight="600">Envoyé à: </Text>
            <Text>{selectedUser?.email}</Text>
          </HStack>
        
        </VStack>
      </HStack>
    </VStack>
  );
};

export default PDFHeader;
