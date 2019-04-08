import React from "react";

import { Consumer } from "../../context";

import TestSelection from "./TestSelection";

import Test1 from "./Test1";
import Test2 from "./Test2";
import Test3 from "./Test3";

const Texts = () => (
  //adding more tests
  <Consumer>
    {value => {
      switch (value.selectedTestYesNo) {
        case "no":
          return <TestSelection selectingTest={value.selectingTest} />;

        case "yes":
          switch (value.selectedTest) {
            case "pytania1":
              return <Test1 />;
            case "pytania2":
              return <Test2 />;
            case "pytania3":
              return <Test3 />;
          }
      }
    }}
  </Consumer>
);

export default Texts;
