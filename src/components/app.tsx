import React from "react";
import { history } from "lib/history";
import { Router } from "react-router-dom";
import { Routes } from "./routes";

interface IProps {}

export const App = (props: IProps) => {
  return (
    <Router history={history}>
      <Routes />
    </Router>
  );
};
