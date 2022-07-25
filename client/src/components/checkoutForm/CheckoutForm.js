import React, { useState, useContext } from "react";
import { CartContext } from "../../context/CartContext";
import StepCheckoutForm from "./StepCheckoutForm";
import AddressForm from "./subforms/AddressForm";
import InformationForm from "./subforms/InformationForm";
import PaymentForm from "./subforms/PaymentForm";

export default function CheckoutForm() {
  const { setCheckoutIndex, checkoutIndex } = useContext(CartContext);

  const [formIndex, setFormIndex] = useState(1);
  const [multiFormData, setMultiFormData] = useState({
    information: {
      nom: "",
      prenom: "",
      email: "",
    },
    adress: {
      pays: "",
      ville: "",
      zipcode: "",
      address: "",
    },
    payment: {},
  });

  const modifyIndex = (index) => {
    setFormIndex(index);
    setCheckoutIndex(index);
  };

  return (
    <>
      <StepCheckoutForm
        modifyIndex={modifyIndex}
        checkoutIndex={checkoutIndex}
      />

      {formIndex === 1 ? (
        <InformationForm modifyIndex={modifyIndex} />
      ) : formIndex === 2 ? (
        <AddressForm modifyIndex={modifyIndex} />
      ) : formIndex === 3 ? (
        <PaymentForm modifyIndex={modifyIndex} />
      ) : null}
    </>
  );
}
