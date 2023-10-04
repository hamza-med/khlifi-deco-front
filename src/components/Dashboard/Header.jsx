import { Button, HStack } from "@chakra-ui/react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { forwardRef, useState } from "react";
import ReactDatePicker from "react-datepicker";
import { LuCalendarDays, LuDownload } from "react-icons/lu";

const PickerInput = forwardRef(({ value, onClick, ...props }, ref) => (
  <>
    <Button
      {...props}
      _hover={{ bgColor: "black", color: "white" }}
      p="1.5em 2em"
      disabled={props.loading}
      bgColor="white"
      onClick={onClick}
      ref={ref}
      gap="10px"
      color="black"
      leftIcon={<LuCalendarDays fontSize="1.5rem" />}
    >
      {value !== null ? value : "Date"}
    </Button>
  </>
));

const Header = ({ startDate, setStartDate }) => {
  const [loading, setLoading] = useState();

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
        console.log("HTML content covers entire PDF");
      } else {
        console.log("HTML content does not cover entire PDF");
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
        <Button
          _hover={{ bgColor: "black", color: "white" }}
          p="1.5em 2em"
          gap="10px"
          isLoading={loading}
          onClick={handleExportToPDF}
          disabled={loading}
          bgColor="white"
          color="black"
          leftIcon={<LuDownload fontSize="1.5rem" />}
        >
          Export
        </Button>
        <ReactDatePicker
          dateFormat="dd/MM/yyyy"
          maxDate={new Date()}
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          showPopperArrow={false}
          customInput={<PickerInput loading={loading} />}
        />
      </HStack>
    </HStack>
  );
};

export default Header;
