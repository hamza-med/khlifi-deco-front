import {
  HStack,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";

const Product = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <VStack
          key={product.id}
          gap="20px"
          minH="40px"
          align="start"
          justify="center"
          fontWeight="500"
        >
          <HStack>
            <p>{product.title}</p>
            <p>&times; </p>
            <p>{product.quantity}</p>
          </HStack>
        </VStack>
      ))}
    </>
  );
};

const Order = ({ order, setName }) => (
  <>
    <Tr borderColor="rgb(224, 224, 224);">
      <Td
        paddingLeft="15px"
        borderColor="rgb(224, 224, 224);"
        fontWeight="500"
        fontSize="1.2rem"
        cursor="pointer"
        onClick={() => setName([order.firstname, order.lastname])}
      >
        {order.firstname} {order.lastname}
      </Td>
      <Td
        paddingLeft="0"
        borderColor="rgb(224, 224, 224);"
        fontWeight="500"
        fontSize="1.2rem"
      >
        {order.phone}
      </Td>
      <Td
        paddingLeft="0"
        borderColor="rgb(224, 224, 224);"
        fontWeight="500"
        fontSize="1.2rem"
      >
        {order.address.state}, {order.address.city} {order.address.postal}
      </Td>
      <Td
        paddingLeft="0"
        borderColor="rgb(224, 224, 224);"
        fontWeight="500"
        fontSize="1.2rem"
      >
        <Product products={order.products} />
      </Td>
      <Td
        paddingRight="0"
        borderColor="rgb(224, 224, 224);"
        color="#755a00"
        fontWeight="500"
        fontSize="1.5rem"
      >
        {order.total}
      </Td>
    </Tr>
  </>
);
const OrdersTable = ({ orders, setName }) => {
  const total = orders?.reduce(
    (total, item) => total + item.attributes.total,
    0
  );
  return (
    <div>
      <TableContainer border="1px solid rgb(224, 224, 224);">
        <Table>
          <Thead>
            <Tr>
              <Th
                borderColor="rgb(224, 224, 224);"
                padding="18px 0"
                paddingLeft="15px"
                fontFamily="inherit"
                fontSize="1.3rem"
                textTransform="capitalize"
                fontWeight="500"
                color="black"
                letterSpacing="0"
              >
                Client
              </Th>
              <Th
                borderColor="rgb(224, 224, 224);"
                padding="18px 0"
                fontFamily="inherit"
                fontSize="1.3rem"
                textTransform="capitalize"
                fontWeight="500"
                color="black"
                letterSpacing="0"
              >
                Numéro
              </Th>
              <Th
                borderColor="rgb(224, 224, 224);"
                padding="18px 0"
                fontFamily="inherit"
                fontSize="1.3rem"
                textTransform="capitalize"
                fontWeight="500"
                color="black"
                letterSpacing="0"
              >
                Addresse
              </Th>
              <Th
                borderColor="rgb(224, 224, 224);"
                padding="18px 0"
                fontFamily="inherit"
                fontSize="1.3rem"
                textTransform="capitalize"
                fontWeight="500"
                color="black"
                letterSpacing="0"
              >
                Désignations
              </Th>
              <Th
                borderColor="rgb(224, 224, 224);"
                padding="18px 0"
                fontFamily="inherit"
                fontSize="1.3rem"
                textTransform="capitalize"
                fontWeight="500"
                color="black"
                letterSpacing="0"
              >
                Montant H.T
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {orders?.map((order, i) => {
              return (
                <Order key={i} order={order?.attributes} setName={setName} />
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
      <HStack>
        <Heading
          ml="auto"
          mr="10px"
          mt="10px"
          fontSize="1.9rem"
          width="fit-content"
        >
          Total H.T : <span style={{ color: "#755a00" }}>{total}</span>
        </Heading>
      </HStack>
    </div>
  );
};

export default OrdersTable;
