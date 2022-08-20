import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { FiAtSign } from "react-icons/fi";
import { registerUser } from "../../api/user";
export default function Register({ toggle }) {
  const [passwordShow, setPasswordShow] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [lastName, setLastName] = useState("");

  const sendForm = (e) => {
    e.preventDefault();
    registerUser(email, password, name, lastName)
      .then((res) => {
        return alert(res.data.message);
      })
      .catch((err) => alert(err.response.data.message));
  };
  return (
    <div className="max-w-7xl px-4 py-16 mt-20 mx-auto sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto">
        <h1 className="text-2xl font-bold text-center text-amber-500 sm:text-3xl">
          Nouveau client ?
        </h1>

        <form
          className="p-8 mt-10 mb-0 space-y-4 rounded-lg shadow-2xl"
          onSubmit={sendForm}
        >
          <p className="text-lg font-medium text-zinc-800">
            Créer votre compte
          </p>

          <div>
            <label
              htmlFor="lastname"
              className="text-sm font-medium text-zinc-800"
            >
              Nom
            </label>

            <div className="relative mt-1">
              <input
                type="text"
                id="lastname"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                placeholder="Entrez votre nom"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
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
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-zinc-800"
            >
              Email
            </label>

            <div className="relative mt-1">
              <input
                type="email"
                id="email"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                placeholder="Entrez votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <span className="absolute inset-y-0 inline-flex items-center right-4">
                <FiAtSign className="w-5 h-5 text-gray-400" />
              </span>
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-zinc-800"
            >
              Mot de passe
            </label>

            <div className="relative mt-1">
              <input
                type={passwordShow ? "text" : "password"}
                id="password"
                className="w-full p-4 pr-12 text-sm border-gray-200 rounded-lg shadow-sm"
                placeholder="Entrez votre mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <span
                className="absolute inset-y-0 inline-flex items-center right-4 cursor-pointer "
                onClick={() => setPasswordShow(!passwordShow)}
              >
                {passwordShow ? (
                  <AiOutlineEyeInvisible className="w-6 h-6 text-red-500 hover:text-amber-500" />
                ) : (
                  <AiOutlineEye className="w-6 h-6 text-gray-400 hover:text-amber-500" />
                )}
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="block w-full px-5 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg"
          >
            Créer votre compte
          </button>

          <p className="text-sm text-center text-gray-500">
            Déjà client?{" "}
            <span
              className="underline font-semibold cursor-pointer"
              href=""
              onClick={toggle}
            >
              Connectez vous
            </span>
          </p>
        </form>
      </div>
    </div>
  );
}
