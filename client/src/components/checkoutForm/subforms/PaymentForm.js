import React from "react";

export default function PaymentForm({ modifyIndex }) {
  const handleReturn = () => {
    modifyIndex(2);
  };
  return (
    <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-2xl font-bold text-center text-indigo-600 sm:text-3xl">
          Paiement
        </h1>

        <form
          action=""
          className="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl"
        ></form>
        <button onClick={handleReturn}>Précedent</button>
        <button onClick={() => modifyIndex(4)}>Procéder au paiement</button>
      </div>
    </div>
  );
}
