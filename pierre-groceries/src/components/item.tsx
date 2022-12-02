import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { ItemChild } from "../services/types";


const Item = ({ grocery, index, deleteGrocery, purchase, icon }: ItemChild) => {
  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {grocery}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => deleteGrocery(grocery)}>
            <DeleteTwoToneIcon color='error'/>
          </Button>
        </CardActions>
        <CardActions>
          <Button size="small" onClick={() => purchase(grocery)}>
            {icon}
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Item;
