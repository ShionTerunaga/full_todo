import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
const DeleteButton = () => {
    return (
        <div>
            <IconButton aria-label="delete">
                <DeleteIcon />
            </IconButton>
        </div>
    );
}

export default DeleteButton;