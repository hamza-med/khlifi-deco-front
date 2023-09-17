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
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import { AiFillDelete } from "react-icons/ai";
import PickerInput from "@/uilib/DatePicker/PickerInput";
import toast from "@/utils/toast";
import { useNavigate } from "react-router-dom";

const Reservation = ({ start, end, id }) => {
  const { defineReservation } = useShoppingCart();
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  useEffect(() => {
    const [day, month, year] = start.split("/");
    const [dayEnd, monthEnd, yearEnd] = end.split("/");
    setStartDate(new Date(year, month - 1, day));
    setEndDate(new Date(yearEnd, monthEnd - 1, dayEnd));
  }, []);

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    defineReservation(
      id,
      start?.toLocaleDateString("fr-FR"),
      end?.toLocaleDateString("fr-FR")
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
        customInput={<PickerInput className="td__reservation" />}
      />
    </>
  );
};

const TableItem = ({ item }) => {
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

  return (
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
  );
};

const Table = () => {
  const { cartItems } = useShoppingCart(true);
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <div>
      <TableContainer>
        <Tb variant="simple">
          <Thead bgColor="#F9F1E7">
            <Tr p="1em">
              <Th></Th>
              <Th className="tb__header">Produit</Th>
              <Th className="tb__header">Prix</Th>
              <Th className="tb__header">Réservation</Th>
              <Th className="tb__header">Quantité</Th>
              <Th className="tb__header">Sous-total</Th>
              <Th className="tb__header"></Th>
            </Tr>
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
