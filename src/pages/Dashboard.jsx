import { Skeleton } from "@chakra-ui/react";
import { Suspense, lazy, useState } from "react";
import dayjs from "@/utils/dayjs";
const PDFFile = lazy(() => import("@/components/Dashboard/PDFFile"));
const Header = lazy(() => import("@/components/Dashboard/Header"));

const Dashboard = () => {
  const [date, setDate] = useState(dayjs().toDate());
  const [, setPageSize] = useState();
  const [user, setUser] = useState();
  const [selectedUser, setSelectedUser] = useState([]);
  const lastUser = selectedUser[selectedUser?.length - 1];
  const [max, setMax] = useState(3);
  const [disabled, setDisabled] = useState();

  return (
    <div className="dashboard-container">
      <Suspense fallback={<Skeleton />}>
        <Header
          setSelectedUser={setSelectedUser}
          setUser={setUser}
          startDate={date}
          setStartDate={setDate}
          setPageSize={setPageSize}
          max={max}
          disabled={disabled}
        />
      </Suspense>
      <Suspense fallback={<Skeleton />}>
        <PDFFile
          selectedUser={lastUser}
          user={user}
          date={date}
          pageSize={14}
          setMax={setMax}
          setDisabled={setDisabled}
        />
      </Suspense>
    </div>
  );
};

export default Dashboard;
