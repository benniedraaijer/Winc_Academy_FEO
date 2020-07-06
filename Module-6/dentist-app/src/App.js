import React from "react";
import { Calendar } from "./components/Calendar";
import { Day } from "./components/Day";
import "./App.css";

export const App = () => {
  return (
    <>
      <Calendar />
      <Day />
    </>
  );
}