import { useShoppingCart } from "@/hooks/useShoppingCart";
import { useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import PickerInput from "./PickerInput";

const DatePicker = ({ setDates, prodId }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const { cartItems } = useShoppingCart();

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  useEffect(() => {
    const item = cartItems.find((item) => item?.id === prodId);
    if (item) {
      setStartDate(new Date(Date.parse(item?.start)));
      setEndDate(new Date(Date.parse(item?.end)));
    }
  }, [cartItems, prodId]);

  useEffect(() => {
    setDates([
      startDate?.toLocaleDateString("fr"),
      endDate?.toLocaleDateString("fr"),
    ]);
  }, [endDate, setDates, startDate]);

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
        customInput={<PickerInput />}
      />
    </>
  );
};

export default DatePicker;
