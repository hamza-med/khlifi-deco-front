import { Box, HStack, Text, VStack } from "@chakra-ui/react";

const PDFFooter = ({ total }) => {
  const date = new Date();

  const formattedDateLocale = date.toLocaleDateString("en-GB");

  return (
    <>
      <Box
        mt="50px"
        border="1px solid rgb(224, 224, 224)"
        w="700px"
        padding="15px"
      >
        <VStack
          align="start"
          fontSize="1.2rem"
          fontWeight="500"
          gap="0px"
          textAlign="justify"
        >
          <Text fontWeight="600" fontSize="1.3rem">
            Conditions et modalités de paiement
          </Text>
          <Text>
            Les paiements s&apos;effectuent conformément à l&apos;option
            suivante: {(total * 40) / 100} DT Un mois d&apos;avance à la date
            d&apos;événement et le reste à payer par chèque ou espèce le jour de
            la livraison.
          </Text>
        </VStack>
      </Box>
      <Box mt="100px" mr="20%" fontSize="1.1rem">
        <HStack justify="space-between">
          <VStack align="start">
            <HStack>
              <Text fontWeight="bold">Tel:</Text>
              <Text>(+216) 21 453 379</Text>
            </HStack>
            <HStack>
              <Text fontWeight="600">Email:</Text>
              <Text>youssefkhlifi18@gmail.com</Text>
            </HStack>
          </VStack>
          <VStack align="start">
            <HStack>
              <Text fontWeight="600">Date:</Text>
              <Text>{formattedDateLocale}</Text>
            </HStack>
            <HStack>
              <Text fontWeight="600">Devis n°:</Text>
              <Text>{new Date().getFullYear()}/541</Text>
            </HStack>
          </VStack>
        </HStack>
      </Box>
    </>
  );
};

export default PDFFooter;
