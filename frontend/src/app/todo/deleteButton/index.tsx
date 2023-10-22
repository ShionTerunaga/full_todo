import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { Dispatch, SetStateAction } from "react";
import { todoType } from "@/shared/type";
import { deleteTodo } from "@/api/todo";
import { mutate, useSWRConfig } from "swr";
import linkName from "@/shared/linkName";
interface props{
    isEdit:boolean;
    userid:string|null;
    itemid:string;
}
const DeleteButton = ({
    isEdit,
    userid,
    itemid,
}:props) => {
    useSWRConfig();
    const handleClick=async()=>{
        const data:todoType[]=await deleteTodo(userid as string,itemid);
        mutate(`${linkName.getTodo}${userid}`);
    }
    return (
        <div>
            <IconButton 
                aria-label="delete"
                disabled={isEdit}
                onClick={()=>handleClick()}
            >
                <DeleteIcon />
            </IconButton>
        </div>
    );
}

export default DeleteButton;