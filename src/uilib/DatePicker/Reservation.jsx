import PickerInput from "./PickerInput";
import ReactDatePicker from "react-datepicker";
import { useShoppingCart } from "@/hooks/useShoppingCart";
import dayjs from "@/utils/dayjs";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import customToast from "@/utils/toast";

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
  const { t } = useTranslation();
  const initialStartDate = parseDate(start);
  const initialEndDate = parseDate(end);
  const [startDate, setStartDate] = useState(initialStartDate);
  const [endDate, setEndDate] = useState(initialEndDate);

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
    const reservationStart = dayjs(start).format("DD/MM/YYYY");
    !end &&
      customToast(
        `${t("productDetail.errorMsgTitle")}`,
        `${t("productDetail.errorMsg")}`,
        "info",
        "top",
        5000
      );
    defineReservation(
      id,
      reservationStart,
      end ? dayjs(end).format("DD/MM/YYYY") : reservationStart
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
export default Reservation;
