import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { InputGroceryChild } from "../services/types";

const InputGrocery = ({ setItemList, pendingItemList }: InputGroceryChild) => {
  const [groceryItem, setGroceryItem] = React.useState("");
  const [toggleButton, setToggleButton] = React.useState(true);

  React.useEffect(() => {
    groceryItem.length ? setToggleButton(false) : setToggleButton(true)
  }, [groceryItem]);

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
          value={groceryItem}
          onChange={(event) => {
            setGroceryItem(event.target.value);
          }}
        />

        <Button
          variant="outlined"
          disabled={toggleButton}
          onClick={(event: React.SyntheticEvent) => {
            event.preventDefault();
            setItemList([...pendingItemList, groceryItem]);
            setGroceryItem("");
          }}
        >
          Add to list
        </Button>
      </Box>
    </div>
  );
};

export default InputGrocery;
