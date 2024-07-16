import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export default function AuthCheckBoolean() {
  const history = useHistory();

  let loggedIn = false;

  if (localStorage.getItem("loggedIn")) {
    loggedIn = true;
    
  }

  return loggedIn;
}

// alt shift O to remove all the unused imports
