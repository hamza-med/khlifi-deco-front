import { HStack, Td, Text, Tr, VStack, useMediaQuery } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import toast from "@/utils/toast";
import Reservation from "@/uilib/DatePicker/Reservation";
import { AiFillDelete } from "react-icons/ai";
import { useShoppingCart } from "@/hooks/useShoppingCart";

const TableItem = ({ item }) => {
  const { t } = useTranslation();

  const { price, subtotal } = t("cart");
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const navigate = useNavigate();
  const { defineQuantity, removeFromCart } = useShoppingCart();
  const handleChange = (e) => {
    defineQuantity(item?.id, +e.target.value);
  };
  const handleRemove = () => {
    removeFromCart(item?.id);
    toast(t("productRemove"), t("productRemoveDesc"));
  };

  return !isMobile ? (
    <>
      <Tr>
        <Td paddingLeft={0}>
          <div className="td__img">
            <img src={item?.src} alt="" />
          </div>
        </Td>
        <Td
          paddingLeft="1em"
          color="#9F9F9F"
          className="td__title"
          onClick={() => navigate(`/shop/product/${item?.id}`)}
        >
          {item?.title}
        </Td>
        <Td color="#9F9F9F" paddingLeft="1.1em">
          {item?.price} TND
        </Td>
        <Td paddingLeft="1.1em">
          <Reservation start={item?.start} end={item?.end} id={item?.id} />
        </Td>
        <Td>
          <input
            className="td__input"
            type="number"
            defaultValue={item?.quantity}
            onChange={handleChange}
          />
        </Td>
        <Td textAlign="start">{item?.quantity * item?.price} TND</Td>
        <Td className="td__icon" paddingRight="0.8em">
          <AiFillDelete onClick={handleRemove} />
        </Td>
      </Tr>
    </>
  ) : (
    <>
      <Tr>
        <Td padding="10px 0px 10px 3px">
          <div className="td__img">
            <img src={item?.src} alt="" />
          </div>
        </Td>
        <Td padding="10px 2px 10px 0px" color="#9F9F9F" className="td__title">
          <VStack gap="1px" justify="center">
            <HStack>
              <Text
                className="mobile_title"
                fontWeight="500"
                fontSize="17px"
                color="rgba(0,0,0,0.9)"
                cursor="pointer"
                onClick={() => navigate(`/shop/product/${item?.id}`)}
              >
                {item?.title}
              </Text>
              <Text className="td__icon">
                <AiFillDelete onClick={handleRemove} />
              </Text>
            </HStack>

            <Reservation
              start={item?.start}
              end={item?.end}
              id={item?.id}
              fontSize="1rem"
              iconSize="1.4rem"
              borderColor="white"
              p="0"
            />
          </VStack>
          <VStack align="center" gap="1em">
            <VStack>
              <Text color="rgba(0,0,0,0.6)" fontWeight="600">
                {price}
              </Text>
              <Text>{item.price} TND</Text>
            </VStack>
            <VStack>
              <Text color="rgba(0,0,0,0.7)" fontWeight="600">
                {subtotal}
              </Text>
              <Text color="rgba(0,0,0,1)" fontWeight="600">
                {item.price * item.quantity} TND
              </Text>
            </VStack>
          </VStack>
        </Td>
        <Td padding="0" pr="2">
          <input
            max="30"
            min="1"
            className="td__input"
            type="number"
            defaultValue={item?.quantity}
            onChange={handleChange}
          />
        </Td>
      </Tr>
    </>
  );
};
export default TableItem;
