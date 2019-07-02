import React from "react";
import * as ReactDOMServer from "react-dom/server";
import { App } from "components/app";
import { history } from "lib/history";

export const renderToString = (url?: string) => {
  history.replace(url || "/");
  return ReactDOMServer.renderToString(<App />);
};
