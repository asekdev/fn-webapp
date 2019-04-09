import React from "react";

const initialState = {};

const Store = React.createContext(initialState);

const StoreProvider = props => {
  return (
    <Store.Provider value={initialState}>{props.children}</Store.Provider>
  );
};

export { Store, StoreProvider };
