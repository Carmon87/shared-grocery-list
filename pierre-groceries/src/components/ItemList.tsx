import React, { useState } from "react";
import InputGrocery from "./inputGrocery";
import Item from "./item";
import { DeleteGrocery } from "../services/types";
import Grid from "@mui/material/Unstable_Grid2";

const ItemList = () => {
  const [pendingItemList, setPendingItemList] = useState<string[]>([]);

  const deleteGrocery: DeleteGrocery = (index) => {
    const groceryListCopy = [...pendingItemList];
    groceryListCopy.splice(index, 1);
    setPendingItemList(groceryListCopy);
  };

  const addedGroceryList = pendingItemList.map((grocery, index) => {
    return (
      <Grid container spacing={2} key={index}>
        <Item
          grocery={grocery}
          index={index}
          deleteGrocery={deleteGrocery}
        />
      </Grid>
    );
  });

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
