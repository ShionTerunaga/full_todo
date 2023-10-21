import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { Dispatch, SetStateAction } from "react";
import { todoType } from "@/shared/type";
import { deleteTodo } from "@/api/todo";
interface props{
    isEdit:boolean;
    userid:string|null;
    itemid:string;
    setIsComplete:Dispatch<SetStateAction<todoType[]>>;
    setIsImcomplete:Dispatch<SetStateAction<todoType[]>>;
}
const DeleteButton = ({
    isEdit,
    userid,
    itemid,
    setIsComplete,
    setIsImcomplete,
}:props) => {
    const handleClick=async()=>{
        const data:todoType[]=await deleteTodo(userid as string,itemid);
        setIsComplete(data.filter(item=>item.checked===1));
        setIsImcomplete(data.filter(item=>item.checked===0));
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