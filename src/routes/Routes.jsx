import React from "react";
import { Redirect, Route } from "react-router-dom/cjs/react-router-dom.min";
import {
  BrowserRouter,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";
import MainPage from "../pages/mainPage/MainPage";
import AddToDo from "../pages/add-todo/AddToDo";
import ViewPage from "../pages/viewPage/ViewPage";
import Login from "../pages/login/Login";
import NotFound from "../pages/notFound/NotFound";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/home" />
        </Route>

        <Route path="/home" component={MainPage} exact />

        <Route path="/add" exact>
          <AddToDo/>
        </Route>

        <Route path="/login" component={Login} />

        {/* <Route path = "/view/:id" component={ViewPage} exact/> */}

        <Route path="/view/:id" component={ViewPage} />

        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
