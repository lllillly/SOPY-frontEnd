import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "../routers/layouts/Header";
import Footer from "../routers/layouts/Footer";
import Content from "../routers/layouts/Content";

const AppRouter = () => {
  return (
    <Router>
      {/*Header*/}
      <Route path="/" component={Header} />

      {/*Footer*/}
      <Route path="/" component={Footer} />

      {/*Contnet*/}
      <Route path="/" component={Content} />
    </Router>
  );
};

export default AppRouter;
