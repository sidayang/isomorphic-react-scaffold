import * as createHistory from "history";

export const history =
  process.env.TARGET === "client"
    ? createHistory.createBrowserHistory()
    : createHistory.createMemoryHistory();
