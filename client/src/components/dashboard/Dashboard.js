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
    <div className="w-full mx-auto max-w-7xl flex flex-col md:flex-row pt-20 md:pt-36 md:justify-between bg-gray-100 min-h-[60vh]">
      <LeftNavDashboard moveIndex={changeIndex} />
      {index === 1 ? (
        <DashboardOrders />
      ) : index === 2 ? (
        <DashboardSettings />
      ) : null}
    </div>
  );
}
