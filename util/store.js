import React, { createContext, useReducer } from "react";

import { getInitState, setLocalState } from "./state";

const initState = getInitState();
const store = createContext(initState);
const { Provider } = store;

import login from "./actions/login";

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    console.log("the action dispatched", action);
    const newState = {}; // do something with the action
    switch (action.type) {
      case "login":
        const { username, password } = action;
        return login(username, password, state);
      case "change-text":
        return newState;
      default:
        throw new Error();
    }
  }, initState);

  return <Provider value={{ state, dispatch }}> {children} </Provider>;
};

export { store, StateProvider };
