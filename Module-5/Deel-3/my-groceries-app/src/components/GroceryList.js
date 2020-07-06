import React from "react";
import List from "./List";
import InputField from "./InputField";

const GroceryList = ({
  groceryItems,
  handleClickGroceryItem,
  addGrocery,
}) => {
  return (
    <>
      <InputField onSubmit={addGrocery} />
      <List items={groceryItems} handleClickItem={handleClickGroceryItem} />
    </>
  );
};

export default GroceryList;
