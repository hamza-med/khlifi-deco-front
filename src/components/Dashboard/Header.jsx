import { useDebounce } from "@/hooks/useDebounce";
import { usePrivateFetch } from "@/hooks/useFetch";
import customToast from "@/utils/toast";
import { Button, HStack, Select } from "@chakra-ui/react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { forwardRef, useEffect, useMemo, useState } from "react";
import ReactDatePicker from "react-datepicker";
import { LuCalendarDays, LuDownload } from "react-icons/lu";

const PickerInput = forwardRef(({ value, onClick, ...props }, ref) => (
  <>
    <Button
      _hover={{ bgColor: "black", color: "white" }}
      p="1.5em 2.5em"
      disabled={props.loading}
      bgColor="white"
      onClick={onClick}
      ref={ref}
      fontSize="1.1rem"
      gap="10px"
      color="black"
      leftIcon={<LuCalendarDays fontSize="1.5rem" />}
      {...props}
    >
      {value !== null ? value : "Date"}
    </Button>
  </>
));

const userData = ["email", "firstname", "lastname", "phone", "address"];

const Header = ({
  setSelectedUser,
  setUser,
  setPageSize,
  startDate,
  setStartDate,
  max,
  disabled,
}) => {
  const [users, setUsers] = useState();
  const [loading, setLoading] = useState();
  const [size] = useState(max);
  useDebounce(size, setPageSize, 1000);
  const userQuery = userData
    .map((user, i) => {
      return `fields[${i}]=${user}&`;
    })
    .join("");
  const { data: userInfo } = usePrivateFetch(
    `orders?${userQuery}&filters[creationDate][$eq]=${startDate
      .toISOString()
      .slice(0, -1)
      .replace("T", " ")}`
  );
  useEffect(() => {
    setUsers(userInfo?.map((userInfo) => userInfo.attributes));
  }, [userInfo]);

  const userOptions = useMemo(() => {
    const emails = users?.map((user) => user.email);
    return [...new Set(emails)];
  }, [users]);

  const handleChange = (e) => {
    setUser(e.target.value);
    setSelectedUser(users.filter((user) => user.email === e.target.value));
  };
  /**PDF DOWNLOAD */
  const handleExportToPDF = async () => {
    setLoading(true);
    const input = document.getElementById("file-to-export");
    html2canvas(input).then((canvas) => {
      setLoading(false);
      let imgWidth = 208;
      let imgHeight = (canvas.height * imgWidth) / canvas.width;
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const isFullCoverage = imgHeight > pdfHeight;
      if (isFullCoverage) {
        customToast(
          "Can't download",
          "Decrease the number of order entries",
          "error"
        );
      } else {
        pdf.save("devi.pdf");
      }
    });
  };

  return (
    <HStack justifyContent="space-between">
      <h1 style={{ fontSize: "1.6rem", fontWeight: "600" }}>
        Aperçu des ventes
      </h1>
      <HStack>
        {/* <NumberInput
          isDisabled={loading || disabled}
          value={size}
          min={1}
          max={max}
          bgColor="white"
          onChange={(e) => setSize(e)}
          focusBorderColor="black"
        >
          <NumberInputField
            color="black"
            p="1.5em 2em"
            border="none"
            width="100px"
            _invalid={{ borderColor: "black", color: "black" }}
          />
          <NumberInputStepper>
            <NumberIncrementStepper borderColor="white" color="black" />
            <NumberDecrementStepper borderColor="white" color="black" />
          </NumberInputStepper>
        </NumberInput> */}
        <ReactDatePicker
          dateFormat="dd/MM/yyyy"
          maxDate={new Date()}
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          showPopperArrow={false}
          customInput={<PickerInput loading={loading} />}
        />
        <Select
          _hover={{ borderColor: "blackAlpha.200", cursor: "pointer" }}
          onChange={handleChange}
          minW="200px"
          size="lg"
          height="52.8px"
          fontSize="1.1rem"
          borderColor="white"
          bgColor="white"
          fontWeight="600"
          disabled={loading || disabled}
          placeholder="your@email.com"
        >
          {userOptions?.map((user, i) => {
            return (
              <option key={i} value={user}>
                {user}
              </option>
            );
          })}
        </Select>
        <Button
          _hover={{ bgColor: "black", color: "white" }}
          p="1.5em 2.5em"
          gap="6px"
          fontSize="1.1rem"
          isLoading={loading}
          onClick={handleExportToPDF}
          isDisabled={loading || disabled}
          bgColor="white"
          color="black"
          leftIcon={<LuDownload fontSize="1.4rem" />}
        >
          Export
        </Button>
      </HStack>
    </HStack>
  );
};
export default Header;
