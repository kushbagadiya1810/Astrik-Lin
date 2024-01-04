import React, { Fragment, createContext } from "react";
import { useRoutes } from "react-router-dom";
import { adminRoutes } from "./routes";
import CustomCursor from "./views/component/UI/customCursor";

const Context = createContext();

const App = () => {
  const routing = useRoutes(adminRoutes);

  return (
    <Fragment>
      {routing}
      <CustomCursor />
    </Fragment>
  );
};

export default App;
export { Context as IntlContext };
