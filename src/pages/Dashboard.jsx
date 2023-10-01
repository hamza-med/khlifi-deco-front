import PDFFile from "@/components/Dashboard/PDFFile";
import Header from "@/components/Dashboard/Header";
import { useState } from "react";

const Dashboard = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="dashboard-container">
      <Header startDate={date} setStartDate={setDate} />
      <PDFFile date={date} />
    </div>
  );
};

export default Dashboard;
