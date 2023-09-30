import PDFFile from "@/components/Dashboard/PDFFile";
import { Button } from "@chakra-ui/react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useState } from "react";

const Dashboard = () => {
  const [loading, setLoading] = useState();

  const handleExportToPDF = async () => {
    setLoading(true);
    const input = document.getElementById("file-to-export"); // Replace 'table-to-export' with the ID of your table
    html2canvas(input).then((canvas) => {
      setLoading(false);
      let imgWidth = 208;
      let imgHeight = (canvas.height * imgWidth) / canvas.width;
      const imgData = canvas.toDataURL("img/png");
      const pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
      pdf.save("devi.pdf");
    });
  };

  return (
    <>
      <Button
        isLoading={loading}
        onClick={handleExportToPDF}
        disabled={loading}
      >
        Download
      </Button>
      <PDFFile />;
    </>
  );
};

export default Dashboard;
