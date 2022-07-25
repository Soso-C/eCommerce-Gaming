import React from "react";

export default function AddressForm({ modifyIndex }) {
  const handleReturn = () => {
    modifyIndex(1);
  };
  return (
    <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-2xl font-bold text-center text-indigo-600 sm:text-3xl">
          Adresse
        </h1>

        <form
          action=""
          className="p-8 mt-6 mb-0 space-y-4 rounded-lg shadow-2xl"
        ></form>
        <button onClick={handleReturn}>Précedent</button>
        <button onClick={() => modifyIndex(3)}>Continuer</button>
      </div>
    </div>
  );
}
