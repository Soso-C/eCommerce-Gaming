import React, { useState } from "react";
import Login from "../components/login/Login";
import Register from "../components/register/Register";

export default function LoginPage() {
  const [toggleLog, setToggleLog] = useState(false);
  const toggleL = () => {
    setToggleLog(!toggleLog);
  };
  return (
    <>
      {toggleLog ? <Register toggle={toggleL} /> : <Login toggle={toggleL} />}
    </>
  );
}
