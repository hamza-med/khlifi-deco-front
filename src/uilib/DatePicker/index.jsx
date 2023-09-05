import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import PickerInput from "./PickerInput";

const DatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  return (
    <>
      <ReactDatePicker
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
