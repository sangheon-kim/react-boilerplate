import React from "react";
import bg from "../../assets/images/bg.png";
import { TestContext, TestContext2 } from "../../context/testContext";

const Header = () => {
  const hello = React.useContext(TestContext);
  const world = React.useContext(TestContext2);

  console.log({ hello, world });
  return <div>header</div>;
};

export default Header;
