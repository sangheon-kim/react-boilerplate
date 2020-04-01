import React from "react";

export const TestContext = React.createContext();
export const TestContext2 = React.createContext();

const UseContextExample = ({ children }) => children;

function TestApp({ children }) {
  return (
    <div className="TestApp">
      <TestContext.Provider value={{ name: "hello" }}>
        <TestContext2.Provider value={{ name: "world" }}>
          <UseContextExample children={children}></UseContextExample>
        </TestContext2.Provider>
      </TestContext.Provider>
    </div>
  );
}

export default TestApp;
