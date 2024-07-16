import React from "react";
import NavBar from "../NavBar";
import {
  Link,
  Route,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";

export default function Login() {
  const history = useHistory();
  return (
    <>
      <NavBar />
      <div className="todo_container">
        {localStorage.getItem("loggedIn") ? (
          <>You are already logged in <b onClick={() => {
            localStorage.removeItem("loggedIn");
            history.push("/")
          }} style={{color: "red", cursor: "pointer"}}>Logout</b></>
        ) : (
          <>
            <button
              onClick={() => {
                alert("You are successfully logged in");
                history.replace("/");
                localStorage.setItem("loggedIn", true);
              }}
            >
              Login
            </button>{" "}
            <br />
            <Link to="/login/showInfo">
              Nested Route | Show information
            </Link>{" "}
            <br />
            <Route path="/login/showInfo">
              <div>This is dummy login and doesnt communicate with server</div>
            </Route>
          </>
        )}
      </div>
    </>
  );
}
