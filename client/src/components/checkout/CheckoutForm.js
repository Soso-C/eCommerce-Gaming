import React from "react";
import { useForm } from "react-hook-form";
import CheckoutInput from "./CheckoutInput";

export default function CheckoutForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const sendForm = (e) => {};

  return (
    <form className="w-full" onSubmit={handleSubmit(sendForm)}>
      <div className="mt-8 flex flex-col justify-start items-start w-full space-y-8 ">
        <CheckoutInput
          type="text"
          placeholder="Nom"
          id="lastname"
          error={errors.lastname}
          {...register("lastname", {
            required: { value: true },
            pattern: {
              value: /^([A-Z][a-z]+([ ]?[a-z]?['-]?[A-Z][a-z]+)*)$/,
              message: "Entrez un nom valide",
            },
            minLength: {
              value: 3,
              message: "Minimum 3 caracteres",
            },
            maxLength: {
              value: 50,
              message: "Maximum 50 caracteres",
            },
          })}
        />

        <CheckoutInput
          type="text"
          placeholder="Prénom"
          id="name"
          error={errors.name}
          {...register("name", {
            required: { value: true },
            pattern: {
              value: /^([A-Z][a-z]+([ ]?[a-z]?['-]?[A-Z][a-z]+)*)$/,
              message: "Entrez un nom valide",
            },
            minLength: {
              value: 3,
              message: "Minimum 3 caracteres",
            },
            maxLength: {
              value: 50,
              message: "Maximum 50 caracteres",
            },
          })}
        />

        <CheckoutInput
          type="email"
          placeholder="Email"
          id="email"
          error={errors.email}
          {...register("email", {
            required: true,
            pattern: {
              value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
              message: "Entrez un email valide",
            },
          })}
        />
        <CheckoutInput type="text" placeholder="Adresse" id="address" />
        <div className="flex justify-between flex-col sm:flex-row w-full space-y-8 sm:space-y-0 sm:space-x-8">
          <CheckoutInput type="text" placeholder="Pays" id="country" />
          <CheckoutInput type="text" placeholder="Ville" id="city" />
        </div>
        <div className="flex justify-between flex-col sm:flex-row w-full space-y-8 sm:space-y-0 sm:space-x-8">
          <CheckoutInput
            type="text"
            placeholder="Code Postal"
            id="zipcode"
            error={errors.zipcode}
            {...register("zipcode", {
              required: true,
              pattern: {
                value: /^(?:0[1-9]|[1-9]\d)\d{3}$/gm,
                message: "Entrez un code postale valide",
              },
            })}
          />
          <CheckoutInput
            type="tel"
            placeholder="Télephone"
            id="phone"
            error={errors.phone}
            {...register("phone", {
              required: true,
              pattern: {
                value: /^(0|\+33 )[1-689]([ .-]?\d{2}){4}$/,
                message: "Entrez un numéro valide",
              },
            })}
          />
        </div>
      </div>
      <div className="mt-12 w-full">
        <p className="text-xl font-semibold leading-5 text-gray-800">
          Paiement
        </p>
        <div className="mt-8 flex flex-col justify-start w-full space-y-8 ">
          <CheckoutInput
            type="text"
            placeholder="Nom sur la carte"
            id="cardname"
          />
          <div className="flex justify-between flex-col sm:flex-row w-full space-y-8 sm:space-y-0 sm:space-x-8">
            <CheckoutInput
              type="text"
              placeholder="Date d'expiration"
              id="date-expiration"
            />
            <CheckoutInput
              type="text"
              placeholder="Cryptogramme"
              id="cryptogram"
            />
          </div>
          <CheckoutInput
            type="text"
            placeholder="Numéro de la carte"
            id="cardnumber"
            error={errors.cardnumber}
            {...register("cardnumber", {
              required: true,
              pattern: {
                value: /(\d{4}[-. ]?){4}|\d{4}[-. ]?\d{6}[-. ]?\d{5}/,
                message: "Entrez un numéro de carte valide",
              },
            })}
          />
        </div>
      </div>
      <button
        className="mt-8 text-base font-medium leading-4 hover:bg-black py-4 w-full md:w-4/12 lg:w-full text-white bg-gray-800"
        type="submit"
      >
        Procéder au paiement
      </button>
    </form>
  );
}
