import { useShoppingCart } from "@/hooks/useShoppingCart";
import {
  Table as Tb,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useMediaQuery,
  VStack,
  Text,
  HStack,
} from "@chakra-ui/react";
import { useCallback, useState } from "react";
import ReactDatePicker from "react-datepicker";
import { AiFillDelete } from "react-icons/ai";
import PickerInput from "@/uilib/DatePicker/PickerInput";
import toast from "@/utils/toast";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import dayjs from "@/utils/dayjs";

export const Reservation = ({
  iconSize = "1.8rem",
  start,
  end,
  id,
  ...props
}) => {
  const { defineReservation } = useShoppingCart();
  const currentDate = dayjs();
  const nextDay = currentDate.add(1, "day");
  const parseDate = useCallback(
    (dateStr) => {
      const parsedDate = dayjs(dateStr, "DD/MM/YYYY", true);
      if (parsedDate.isValid()) {
        return parsedDate.toDate();
      } else {
        console.error(`Invalid date string: ${dateStr}`);
        return nextDay.toDate();
      }
    },
    [nextDay]
  );

  const initialStartDate = parseDate(start);
  const initialEndDate = parseDate(end);
  const [startDate, setStartDate] = useState(initialStartDate);
  const [endDate, setEndDate] = useState(initialEndDate);

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    defineReservation(
      id,
      dayjs(start).format("DD/MM/YYYY"),
      dayjs(end).format("DD/MM/YYYY")
    );
  };

  return (
    <>
      <ReactDatePicker
        dateFormat="dd/MM/yyyy"
        minDate={new Date()}
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        selectsRange
        showPopperArrow={false}
        customInput={
          <PickerInput iconSize={iconSize} fontSize="1rem" {...props} />
        }
      />
    </>
  );
};

const TableItem = ({ item }) => {
  const { t } = useTranslation();

  const { mobQuant, product, price, reservation, quantity, subtotal } =
    t("cart");
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const navigate = useNavigate();
  const { defineQuantity, removeFromCart } = useShoppingCart();
  const handleChange = (e) => {
    defineQuantity(item?.id, +e.target.value);
  };
  const handleRemove = () => {
    removeFromCart(item?.id);
    toast("Produit retiré");
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
        <Td padding="10px 0px 10px 5px">
          <div className="td__img">
            <img src={item?.src} alt="" />
          </div>
        </Td>
        <Td padding="3" color="#9F9F9F" className="td__title">
          <VStack gap="1px" justify="center">
            <Text
              fontWeight="500"
              fontSize="17px"
              color="rgba(0,0,0,0.9)"
              cursor="pointer"
              onClick={() => navigate(`/shop/product/${item?.id}`)}
            >
              {item?.title}
            </Text>
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
        <Td padding="0" pr="3">
          <input
            max="30"
            min="1"
            className="td__input"
            type="number"
            defaultValue={item?.quantity}
            onChange={handleChange}
          />
        </Td>
        <Td className="td__icon" padding="0">
          <AiFillDelete onClick={handleRemove} />
        </Td>
      </Tr>
    </>
  );
};

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
                  {/* <Th className="tb__header"></Th> */}
                </Tr>
              </>
            )}
          </Thead>
          <Tbody>
            {cartItems.map((el) => (
              <TableItem key={el?.id} item={el} />
            ))}
          </Tbody>
        </Tb>
      </TableContainer>
    </div>
  );
};

export default Table;
