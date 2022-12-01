import { render } from "@testing-library/react";
import React, { useState } from "react";
import InputGrocery from "./inputGrocery";
import Item from "./item";
import { DeleteGrocery } from "../services/types";

const ItemList = () => {
  const [pendingItemList, setPendingItemList] = useState<string[]>([]);

  const deleteGrocery: DeleteGrocery = (index) => {
    const groceryListCopy = [...pendingItemList];
    groceryListCopy.splice(index, 1);
    setPendingItemList(groceryListCopy);
  };

  const addedGroceryList = pendingItemList.map((grocery, index) => (
    <Item grocery={grocery} key={index} index={index} deleteGrocery={deleteGrocery} />
  ));

  return (
    <div>
      <InputGrocery
        setItemList={setPendingItemList}
        pendingItemList={pendingItemList}
      />
      {addedGroceryList}
    </div>
  );
};

export default ItemList;
