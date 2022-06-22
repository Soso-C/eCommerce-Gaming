import React from "react";
import { TbTruckDelivery } from "react-icons/tb";

export default function TopNavbarMessage() {
  return (
    <div className="px-4 py-3 text-white bg-neutral-800 z-10 flex items-center justify-center space-x-2">
      <TbTruckDelivery className="h-6 w-6" />
      <p className="text-sm font-medium text-center ">
        Livraison offerte à partir de 200€
      </p>
    </div>
  );
}
