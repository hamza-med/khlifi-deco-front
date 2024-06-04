import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

const TableHeader = ({ title, ...props }) => {
  return (
    <Th
      borderColor="rgb(224, 224, 224);"
      padding="18px 0"
      fontFamily="inherit"
      fontSize="1.3rem"
      textTransform="capitalize"
      fontWeight="600"
      color="white"
      letterSpacing="0"
      {...props}
    >
      {title}
    </Th>
  );
};

const TableFooter = ({ total }) => {
  return (
    <>
      <Tr borderColor="red">
        <Td borderColor="white"></Td>
        <Td borderColor="white"></Td>
        <Td borderColor="white"></Td>
        <Td
          paddingLeft=""
          fontWeight="600"
          fontSize="1.2rem"
          borderColor="rgb(224, 224, 224);"
          borderLeft="1px solid rgb(224, 224, 224);"
          //bgColor="gray.200"
        >
          Total HT
        </Td>
        <Td
          borderColor="rgb(224, 224, 224);"
          paddingRight="0"
          color="black"
          fontWeight="500"
          fontSize="1.3rem"
        >
          {total}
        </Td>
      </Tr>
      <Tr>
        <Td borderColor="white"></Td>
        <Td borderColor="white"></Td>
        <Td borderColor="white"></Td>
        <Td
          paddingLeft=""
          fontWeight="600"
          fontSize="1.2rem"
          borderLeft="1px solid rgb(224, 224, 224);"
          //bgColor="gray.200"
        >
          TVA (19%)
        </Td>
        <Td paddingRight="0" color="black" fontWeight="500" fontSize="1.3rem">
          {(total * 19) / 100}
        </Td>
      </Tr>
      <Tr>
        <Td></Td>
        <Td></Td>
        <Td></Td>
        <Td
          paddingLeft=""
          fontWeight="600"
          fontSize="1.2rem"
          bgColor="black"
          color="white"
          borderLeft="1px solid rgb(224, 224, 224);"
        >
          Total TTC
        </Td>
        <Td
          color="white"
          paddingRight="0"
          fontWeight="600"
          fontSize="1.5rem"
          bgColor="black"
        >
          {(total * 119) / 100}
        </Td>
      </Tr>
    </>
  );
};

const Product = ({ product }) => {
  return (
    <>
      <Tr borderColor="rgb(224, 224, 224);">
        <Td
          paddingLeft="30px"
          borderColor="rgb(224, 224, 224);"
          fontWeight="500"
          fontSize="1.2rem"
          cursor="pointer"
        >
          {product.quantity}
        </Td>
        <Td
          paddingLeft="30px"
          borderColor="rgb(224, 224, 224);"
          fontWeight="500"
          fontSize="1.2rem"
        >
          {product.days}
        </Td>
        <Td
          paddingLeft="0"
          borderColor="rgb(224, 224, 224);"
          fontWeight="500"
          fontSize="1.2rem"
        >
          {product.title}
        </Td>
        <Td
          paddingLeft="30px"
          borderColor="rgb(224, 224, 224);"
          fontWeight="500"
          fontSize="1.2rem"
        >
          {product.price}
        </Td>
        <Td
          paddingRight="0"
          borderColor="rgb(224, 224, 224);"
          color="black"
          fontWeight="500"
          fontSize="1.3rem"
        >
          {product.price * product.quantity * product.days}
        </Td>
      </Tr>
    </>
  );
};
const OrdersTable = ({ products }) => {
  const total = products?.reduce(
    (total, item) => total + item.price * item.quantity * item.days,
    0
  );
  return (
    <div>
      <TableContainer border="1px solid rgb(224, 224, 224);">
        <Table>
          <Thead bgColor="black">
            <Tr>
              <TableHeader title="Quantité" paddingLeft="15px" />
              <TableHeader title="Nbr jours" />
              <TableHeader title="Désignation" />
              <TableHeader title="prix unit HT" />
              <TableHeader title="Montant HT" />
            </Tr>
          </Thead>
          <Tbody>
            {products?.map((product, i) => {
              return <Product key={i} product={product} />;
            })}
          </Tbody>
          <TableFooter total={total} />
        </Table>
      </TableContainer>
    </div>
  );
};

export default OrdersTable;
