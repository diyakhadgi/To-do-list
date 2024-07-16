import React from "react";
import NavBar from "../NavBar";
import {
  useHistory,
  useLocation,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";

export default function ViewPage() {
  const history = useHistory();

  // const getParams = useParams();

  // const getID = getParams.id;

  const getStorage = localStorage.getItem("todo")
    ? JSON.parse(localStorage.getItem("todo"))
    : [];

  // const getData = getStorage[getID];

  const getLocation = useLocation();

  const getURLParams = new URLSearchParams(getLocation.search);

  console.log(getLocation.search);

  const getID = getURLParams.get("id");

  const getData = getStorage[getID];

  const deleteTodo = () => {
    
    getStorage.splice(getID, 1);
    history.replace("/");
    localStorage.setItem("todo", JSON.stringify(getStorage));
  } 




  return (
    <>
      <NavBar />
      <div className="todo_container">
        <button
          onClick={() => {
            history.push("/");
          }}
          style={{ background: "#e7e7e7", color: "#666" }}
        >
          Go Back
        </button>
        <div
          style={{
            background: "#e7e7e7",
            padding: "20px",
            fontSize: "20px",
            margin: "20px",
          }}
        >
          {getData}
        </div>
        <button style={{ background: "red" }} onClick={deleteTodo}>Delete To-do</button>
      </div>
    </>
  );
}
