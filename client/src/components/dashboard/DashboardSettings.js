import React from "react";

export default function DashboardSettings() {
  return (
    <form className="pt-10 md:pt-0 px-4 mb-0 space-y-4 rounded-lg w-full md:w-1/2 mx-auto">
      <p className="text-lg font-medium text-zinc-800">
        Changer vos informations
      </p>

      <div>
        <label htmlFor="lastname" className="text-sm font-medium text-zinc-800">
          Nom
        </label>

        <div className="relative mt-1">
          <input
            type="text"
            id="lastname"
            className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
            placeholder="Entrez votre nom"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="firstname"
          className="text-sm font-medium text-zinc-800"
        >
          Prénom
        </label>

        <div className="relative mt-1">
          <input
            type="text"
            id="firstname"
            className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
            placeholder="Entrez votre prénom"
          />
        </div>
      </div>

      <div>
        <label htmlFor="ville" className="text-sm font-medium text-zinc-800">
          Ville
        </label>

        <div className="relative mt-1">
          <input
            type="email"
            id="ville"
            className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
            placeholder="Entrez votre ville"
          />
        </div>
      </div>
      <div>
        <label htmlFor="adresse" className="text-sm font-medium text-zinc-800">
          Adresse
        </label>

        <div className="relative mt-1">
          <input
            type="email"
            id="adresse"
            className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
            placeholder="Entrez votre Adresse"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium text-zinc-800">
          Code postale
        </label>

        <div className="relative mt-1">
          <input
            type="email"
            id="code postale"
            className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
            placeholder="Entrez votre code postale"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="text-sm font-medium text-zinc-800">
          Email
        </label>

        <div className="relative mt-1">
          <input
            type="email"
            id="email"
            className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
            placeholder="Entrez votre email"
          />
        </div>
      </div>

      <button
        type="submit"
        className="block w-full px-5 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg"
      >
        Enregistrer
      </button>
    </form>
  );
}
