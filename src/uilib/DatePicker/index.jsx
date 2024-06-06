import { useShoppingCart } from "@/hooks/useShoppingCart";
import { useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import PickerInput from "./PickerInput";
import dayjs from "@/utils/dayjs";

const DatePicker = ({ setDates, prodId }) => {
  const currentDate = dayjs();
  const nextDay = currentDate.add(1, "day");

  const [startDate, setStartDate] = useState(nextDay.toDate());
  const [endDate, setEndDate] = useState(nextDay.toDate());
  const { cartItems } = useShoppingCart();

  useEffect(() => {
    const item = cartItems.find((item) => item?.id === prodId);
    if (item) {
      setStartDate(dayjs(item.start, "DD/MM/YYYY", true).toDate());
      setEndDate(dayjs(item.end, "DD/MM/YYYY", true).toDate());
    }
  }, [cartItems, prodId]);

  useEffect(() => {
    setDates([
      dayjs(startDate).format("DD/MM/YYYY"),
      dayjs(endDate).format("DD/MM/YYYY"),
    ]);
  }, [endDate, setDates, startDate]);

  return (
    <>
      <ReactDatePicker
        dateFormat="dd/MM/yyyy"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        startDate={startDate}
        endDate={endDate}
        selectsStart
        showPopperArrow={false}
        customInput={<PickerInput />}
      />
      <ReactDatePicker
        dateFormat="dd/MM/yyyy"
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        showPopperArrow={false}
        customInput={<PickerInput ml="15px" />}
      />
    </>
  );
};

export default DatePicker;
