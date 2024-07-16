import React from "react";
import NavBar from "../NavBar";
import { FaRegEye } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export default function MainPage() {
  const getTodo = localStorage.getItem("todo")
    ? JSON.parse(localStorage.getItem("todo"))
    : [];

  return (
    <>
      <NavBar />
      <div className="todo_container">
        <h3>Your Todo</h3>

        {getTodo.map((data, index) => (
          <>
          <div className="single_todo">
            {data}
            <Link to={`/view/?id=${index}`}>
              <FaRegEye size={"20px"} />
            </Link>
            </div>
            </>
        ))}
      </div>
    </>
  );
}
