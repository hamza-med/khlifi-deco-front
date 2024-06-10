import { HStack, Text, VStack } from "@chakra-ui/react";
import { lazy } from "react";
const Image = lazy(() => import("@/uilib/Image"));

const PDFHeader = ({ selectedUser }) => {
  return (
    <VStack align="start" mb="80px">
      <HStack justify="space-between" w="80%" m="50px 0px 80px 20px">
        <div>
          <Image
            src="/assets/blue_logo_bg.png"
            alt="blue_logo"
            className="pdf_image"
          />
        </div>
        <Text fontSize="2.8rem" fontWeight="bold">
          Devis
        </Text>
      </HStack>
      <HStack justify="space-between" w="82%" fontSize="1.1rem">
        <VStack align="start">
          <HStack>
            <Text fontWeight="bold">Facturé à </Text>
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
            <Text fontWeight="600">Envoyé à </Text>
            <Text>{selectedUser?.email}</Text>
          </HStack>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default PDFHeader;
