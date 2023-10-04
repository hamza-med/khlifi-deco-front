import {
  HStack,
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

const Order = ({ order }) => (
  <>
    <Tr borderColor="rgb(224, 224, 224);">
      <Td paddingLeft="15px" borderColor="rgb(224, 224, 224);">
        {order.firstname} {order.lastname}
      </Td>
      <Td paddingLeft="0" borderColor="rgb(224, 224, 224);">
        {order.phone}
      </Td>
      <Td paddingLeft="0" borderColor="rgb(224, 224, 224);">
        {order.address.street} {order.address.city} {order.address.postal}
      </Td>
      <Td paddingLeft="0" borderColor="rgb(224, 224, 224);">
        <Product products={order.products} />
        {/* <Product products={order.products} /> */}
        {/* <Product products={order.products} /> */}
      </Td>
      <Td paddingRight="0" borderColor="rgb(224, 224, 224);">
        {order.total}
      </Td>
    </Tr>
  </>
);
const OrdersTable = ({ orders }) => {
  console.log(orders);
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
                fontSize="1.1rem"
                textTransform="capitalize"
                fontWeight="600"
                color="black"
              >
                Client
              </Th>
              <Th
                borderColor="rgb(224, 224, 224);"
                padding="18px 0"
                fontFamily="inherit"
                fontSize="1.1rem"
                textTransform="capitalize"
                fontWeight="600"
                color="black"
              >
                Numéro
              </Th>
              <Th
                borderColor="rgb(224, 224, 224);"
                padding="18px 0"
                fontFamily="inherit"
                fontSize="1.1rem"
                textTransform="capitalize"
                fontWeight="600"
                color="black"
              >
                Addresse
              </Th>
              <Th
                borderColor="rgb(224, 224, 224);"
                padding="18px 0"
                fontFamily="inherit"
                fontSize="1.1rem"
                textTransform="capitalize"
                fontWeight="600"
                color="black"
              >
                Désignations
              </Th>
              <Th
                borderColor="rgb(224, 224, 224);"
                padding="18px 0"
                fontFamily="inherit"
                fontSize="1.1rem"
                textTransform="capitalize"
                fontWeight="600"
                color="black"
              >
                Montant H.T
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {orders?.map((order, i) => {
              return <Order key={i} order={order?.attributes} />;
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default OrdersTable;
