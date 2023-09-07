import { useEffect, useState } from "react";
import ReactDatePicker from "react-datepicker";
import PickerInput from "./PickerInput";

const DatePicker = ({ setDates }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

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
