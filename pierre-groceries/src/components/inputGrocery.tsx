import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import {InputGroceryChild} from '../services/types'


const InputGrocery = ({ setItemList, pendingItemList }: InputGroceryChild) => {
  const [groceryItem, setGroceryItem] = React.useState("");

  return (
    <div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Item"
          variant="outlined"
          placeholder="Add your grocery item"
          onChange={(event) => {
            setGroceryItem(event.target.value);
          }}
        />
        <Button
          variant="outlined"
          onClick={(event: React.SyntheticEvent) => {
            event.preventDefault();
            setItemList([...pendingItemList, groceryItem])
          }}
        >
          Add to list
        </Button>
      </Box>
    </div>
  );
};

export default InputGrocery;
