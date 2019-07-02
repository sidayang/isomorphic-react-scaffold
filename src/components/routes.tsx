import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { PageOne } from "./page-one";
import { PageTwo } from "./page-two";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/page-1" component={PageOne} />
      <Route exact path="/page-2" component={PageTwo} />
      <Route render={() => <Redirect to={"/page-1"} />} />
    </Switch>
  );
};
