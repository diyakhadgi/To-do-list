import React, { useRef, useState } from "react";
import NavBar from "../NavBar";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import AuthCheck from "../../middleware/AuthCheck";

export default function AddToDo() {
  
  const todoText = useRef();

  const history = useHistory();

  // auth check
  AuthCheck();
  const addToDo = (e) => {
    e.preventDefault();
  
    const todoString = todoText.current.value;

    const initialTodo = localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")) : [];

    initialTodo.push(todoString);

    localStorage.setItem("todo", JSON.stringify(initialTodo));

    history.push("/");

  };
  
  return (
    <> 
      <NavBar />

      <div className="todo_container">
      <h1>Add to-do: </h1>
        <form action="" onSubmit={addToDo}>
          <input type="text"  ref={todoText}/>
          <button>Save to-do</button>
        </form>
      </div>
    </>
  );
}
