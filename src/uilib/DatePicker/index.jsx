import { useShoppingCart } from "@/hooks/useShoppingCart";
import { useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import PickerInput from "./PickerInput";

const DatePicker = ({ setDates, prodId }) => {
  var date = new Date();
  date.setDate(date.getDate() + 1);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(date);
  const { cartItems } = useShoppingCart();

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  useEffect(() => {
    const item = cartItems.find((item) => item?.id === prodId);
    if (item) {
      const [day, month, year] = item.start.split("/");
      const [dayEnd, monthEnd, yearEnd] = item.end.split("/");
      setStartDate(new Date(year, month - 1, day));
      setEndDate(new Date(yearEnd, monthEnd - 1, dayEnd));
    }
  }, [cartItems, prodId]);

  useEffect(() => {
    setDates([
      startDate?.toLocaleDateString("fr-FR"),
      endDate?.toLocaleDateString("fr-FR"),
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
