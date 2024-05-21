import { Spinner } from "@chakra-ui/react";
import { Suspense, lazy, useState } from "react";

const PDFFile = lazy(() => import("@/components/Dashboard/PDFFile"));
const Header = lazy(() => import("@/components/Dashboard/Header"));

const Dashboard = () => {
  const [date, setDate] = useState(new Date());
  const [pageSize, setPageSize] = useState();
  const [max, setMax] = useState();
  const [disabled, setDisabled] = useState();

  return (
    <div className="dashboard-container">
      <Suspense fallback={<Spinner />}>
        <Header
          startDate={date}
          setStartDate={setDate}
          setPageSize={setPageSize}
          max={max}
          disabled={disabled}
        />
      </Suspense>
      <Suspense fallback={<Spinner />}>
        <PDFFile
          date={date}
          pageSize={pageSize}
          setMax={setMax}
          setDisabled={setDisabled}
        />
      </Suspense>
    </div>
  );
};

export default Dashboard;
