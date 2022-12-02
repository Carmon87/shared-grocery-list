import React, { useState } from "react";
import InputGrocery from "./inputGrocery";
import Item from "./item";
import { DeleteGrocery } from "../services/types";
import Grid from "@mui/material/Unstable_Grid2";
import CheckIcon from '@mui/icons-material/Check';
import ReplayTwoToneIcon from '@mui/icons-material/ReplayTwoTone';

const ItemList = () => {
  const [pendingItemList, setPendingItemList] = useState<string[]>([]);
  const [purchasedItemList, setPurchasedItemList] = useState<string[]>([]);

  const deleteGrocery: DeleteGrocery = (grocery) => {
    if (pendingItemList.find((item) => item === grocery)){
    const groceryListCopy = [...pendingItemList];
    groceryListCopy.splice(groceryListCopy.indexOf(grocery), 1);
    setPendingItemList(groceryListCopy);
    } else {
    const checkedListCopy = [...purchasedItemList];
    checkedListCopy.splice(checkedListCopy.indexOf(grocery), 1);
    setPurchasedItemList(checkedListCopy);
    }
  };

  const purchaseFunction: DeleteGrocery = (grocery) => {
    if (pendingItemList.find((item) => item === grocery)) {
      console.log('grocery in If condition: ',grocery, 'index: ', pendingItemList.indexOf(grocery)) 
      const checkedItem = pendingItemList.splice(
        pendingItemList.indexOf(grocery), 1);
      setPurchasedItemList([...purchasedItemList, ...checkedItem]);
      setPendingItemList(pendingItemList);
    } else {
      const checkedItem = purchasedItemList.splice(
        purchasedItemList.indexOf(grocery), 1);
      setPendingItemList([...pendingItemList, ...checkedItem]);
      setPurchasedItemList(purchasedItemList);
    }
    //We will pass this function to the item as a prop, so when we click the item, it chages the state,
    //altering the color and taking it to the end of the list
    // const updatedGroceryList = pendingItemList.push(pendingItemList.splice(index, 1)[0]);
    // setPendingItemList([...pendingItemList.splice(index, 0), pendingItemList[index]])
  };

  const pendingGroceries = pendingItemList.map((grocery, index) => {
    return (
      <Grid container spacing={2} key={index}>
        <Item
          grocery={grocery}
          index={index}
          deleteGrocery={deleteGrocery}
          purchase={purchaseFunction}
          icon={<CheckIcon color='success'/>}
        />
      </Grid>
    );
  });

  const purchasedGroceries = purchasedItemList.map((grocery, index) => {
    return (
      <Grid container spacing={2} key={index}>
        <Item
          grocery={grocery}
          index={index}
          deleteGrocery={deleteGrocery}
          purchase={purchaseFunction}
          icon={<ReplayTwoToneIcon color='disabled'/>}
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
      <div>
        <h2>Things you need to get</h2>
        {pendingGroceries}</div>
      <div>
      <h2>Things you already bought</h2>
        {purchasedGroceries}</div>
    </div>
  );
};

export default ItemList;
