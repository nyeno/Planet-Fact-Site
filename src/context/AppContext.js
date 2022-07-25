import React, { useReducer, createContext } from "react";

export const AppContext = createContext();

const initialState = {
  hamShow: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "HAMBURGER_SHOW":
      return {
        ...state,
        hamShow: action.payload,
      };
    default:
      throw new Error();
  }
};

export const AppContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={[state, dispatch]}>
      {props.children}
    </AppContext.Provider>
  );
};
