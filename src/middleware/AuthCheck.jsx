import React from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function AuthCheck() {
  const history = useHistory();

  // if (localStorage.getItem("loggedIn")) {
  //   // do nothing
  // } else {
  //   history.replace("/login");
  // }

  !localStorage.getItem("loggedIn") && history.replace("/login");
}
