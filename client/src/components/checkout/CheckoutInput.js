import React from "react";

export default function CheckoutInput({ placeholder, type }) {
  return (
    <input
      className="px-2 focus:outline-none focus:ring-2 focus:ring-gray-500 border-b border-gray-200 leading-4 text-base placeholder-gray-600 py-4 w-full"
      type={type}
      placeholder={placeholder}
    />
  );
}
