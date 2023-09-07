import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import PickerInput from "./PickerInput";

const DatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(
    new Date().setDate(new Date().getDate() + 1)
  );
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
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
        customInput={<PickerInput />}
      />
    </>
  );
};

export default DatePicker;
