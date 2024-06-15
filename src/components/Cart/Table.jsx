import { useShoppingCart } from "@/hooks/useShoppingCart";
import {
  Table as Tb,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
  useMediaQuery,
} from "@chakra-ui/react";
import { Suspense, lazy } from "react";

import { useTranslation } from "react-i18next";

const TableItem = lazy(() => import("./TableItem"));

const Table = () => {
  const { cartItems } = useShoppingCart();
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const { t } = useTranslation();
  const { product, price, reservation, quantity, subtotal } = t("cart");
  return (
    <div>
      <TableContainer>
        <Tb variant="simple">
          <Thead bgColor="#F9F1E7">
            {!isMobile ? (
              <>
                <Tr>
                  <Th></Th>
                  <Th className="tb__header">{product}</Th>
                  <Th className="tb__header">{price}</Th>
                  <Th className="tb__header">{reservation}</Th>
                  <Th className="tb__header">{quantity}</Th>
                  <Th className="tb__header">{subtotal}</Th>
                  <Th className="tb__header"></Th>
                </Tr>
              </>
            ) : (
              <>
                <Tr>
                  <Th className="tb__header"></Th>
                  <Th className="tb__header"></Th>
                  <Th className="tb__header"></Th>
                </Tr>
              </>
            )}
          </Thead>
          <Tbody>
            {cartItems.map((el) => (
              <Suspense key={el?.id}>
                <TableItem item={el} />
              </Suspense>
            ))}
          </Tbody>
        </Tb>
      </TableContainer>
    </div>
  );
};

export default Table;
