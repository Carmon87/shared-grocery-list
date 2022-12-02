import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { ItemChild } from "../services/types";
import CheckIcon from '@mui/icons-material/Check';

const Item = ({ grocery, index, deleteGrocery, purchase }: ItemChild) => {
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
            <DeleteTwoToneIcon/>
          </Button>
        </CardActions>
        <CardActions>
          <Button size="small" onClick={() => purchase(grocery)}>
            <CheckIcon/>
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Item;
