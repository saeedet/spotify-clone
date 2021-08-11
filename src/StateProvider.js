import { useContext, useReducer, createContext } from "react";

export const StateProviderContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateProviderContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateProviderContext.Provider>
);

export const useStateProviderValue = () => useContext(StateProviderContext);
