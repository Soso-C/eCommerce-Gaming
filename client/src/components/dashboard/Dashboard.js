import React, { useState } from "react";
import DashboardOrders from "./DashboardOrders";
import DashboardSettings from "./DashboardSettings";
import LeftNavDashboard from "./LeftNavDashboard";

export default function Dashboard() {
  const [index, setIndex] = useState(1);

  const changeIndex = (index) => {
    setIndex(index);
  };
  return (
    <div className="w-full mx-auto max-w-7xl flex flex-col md:flex-row mt-20 md:mt-36 justify-between min-h-[50vh]">
      <LeftNavDashboard moveIndex={changeIndex} />
      {index === 1 ? (
        <DashboardOrders />
      ) : index === 2 ? (
        <DashboardSettings />
      ) : null}
    </div>
  );
}
