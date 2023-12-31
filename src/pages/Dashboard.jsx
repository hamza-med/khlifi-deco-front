import PDFFile from "@/components/Dashboard/PDFFile";
import Header from "@/components/Dashboard/Header";
import { useState } from "react";

const Dashboard = () => {
  const [date, setDate] = useState(new Date());
  const [pageSize, setPageSize] = useState();
  const [max, setMax] = useState();
  const [disabled, setDisabled] = useState();

  return (
    <div className="dashboard-container">
      <Header startDate={date} setStartDate={setDate} setPageSize={setPageSize} max={max} disabled={disabled} />
      <PDFFile date={date} pageSize={pageSize} setMax={setMax} setDisabled={setDisabled} />
    </div>
  );
};

export default Dashboard;
