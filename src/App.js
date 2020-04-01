import React from "react";
import TestApp from "./context/testContext";
import Header from "./components/Header/Header";
import Sample from "./components/Sample/Sample";

const App = () => {
  return (
    <TestApp>
      <Sample />
    </TestApp>
  );
};

export default App;
