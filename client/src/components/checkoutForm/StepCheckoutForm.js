import React from "react";
import { FaAddressCard } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { BsFillCreditCardFill } from "react-icons/bs";

export default function StepCheckoutForm({ checkoutIndex }) {
  const elements = [
    {
      title: "Information",
      index: 1,
      component: <FaAddressCard className="w-5 h-5" />,
    },
    {
      title: "Adresse",
      index: 2,
      component: <IoLocationSharp className="w-5 h-5" />,
    },
    {
      title: "Paiement",
      index: 3,
      component: <BsFillCreditCardFill className="w-5 h-5" />,
    },
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="pt-20 md:pt-28">
        <ol className="grid grid-cols-1 text-sm border border-gray-100 divide-x divide-gray-100 rounded-lg sm:grid-cols-3 shadow-sm">
          {elements.map((element, index) => {
            return (
              <li
                key={index}
                className={`${
                  checkoutIndex === element.index
                    ? "bg-blue-800 text-white"
                    : "bg-white text-slate-800"
                } flex items-center justify-center p-4 gap-1`}
              >
                {element.component}

                <span className="block font-medium">{element.title}</span>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
