import React from "react";
import { Redirect, Route } from "react-router-dom/cjs/react-router-dom.min";
import MainPage from "../pages/mainPage/MainPage";
import AddToDo from "../pages/add-todo/AddToDo";
import ViewPage from "../pages/viewPage/ViewPage";

export default function Routes() {
  return (
    <>
      <Route path="/" exact>
        <Redirect to="/home" />
      </Route>
      <Route path="/home" component={MainPage} exact />
      <Route path="/add" component={AddToDo} exact />

      {/* <Route path = "/view/:id" component={ViewPage} exact/> */}
      <Route path="/view/" component={ViewPage} exact />
    </>
  );
}
