import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import { ItemChild } from "../services/types";

const Item = ({ grocery, key, index, deleteGrocery }: ItemChild) => {
  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {grocery}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => deleteGrocery(index)}>
            Delete item
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Item;
