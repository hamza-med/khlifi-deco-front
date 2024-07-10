import { useShoppingCart } from "@/hooks/useShoppingCart";
import { useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import PickerInput from "./PickerInput";
import dayjs from "@/utils/dayjs";
import { HStack } from "@chakra-ui/react";

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
    <HStack gap={["5px", "15px"]}>
      <ReactDatePicker
        dateFormat="dd/MM/yyyy"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        startDate={startDate}
        endDate={endDate}
        minDate={nextDay.toDate()}
        selectsStart
        showPopperArrow={false}
        customInput={<PickerInput borderRadius="8px" />}
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
        customInput={<PickerInput borderRadius="8px" />}
      />
    </HStack>
  );
};

export default DatePicker;
