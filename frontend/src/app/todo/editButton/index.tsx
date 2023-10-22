import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { IconButton } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import { todoType } from '@/shared/type';
import { changeTodo } from '@/api/todo';
import { mutate, useSWRConfig } from 'swr';
import linkName from '@/shared/linkName';
interface props{
    isEdit:boolean;
    setIsEdit:Dispatch<SetStateAction<boolean>>;
    userid:string|null;
    value:string;
    todo:todoType
}
const EditButton = ({
    isEdit,
    setIsEdit,
    userid,
    value,
    todo,
}:props) => {
    useSWRConfig();
    const doneHandleClick=async()=>{
        const newData:todoType={
            id:todo.id,
            todo:value,
            checked:todo.checked,
        }
        await changeTodo(userid as string,newData);
        setIsEdit(false);
        mutate(`${linkName.getTodo}${userid}`);
    }
    const editHandleClick=()=>{
        setIsEdit(true);
    }
    return (
        <div>
            {isEdit?(
                <IconButton
                    onClick={()=>doneHandleClick()}
                    disabled={value?false:true}
                >
                    <DoneOutlineIcon/>
                </IconButton>
            ):(
                <IconButton
                    onClick={()=>editHandleClick()}
                >
                    <EditRoundedIcon/>
                </IconButton>
            )}
        </div>
    );
}

export default EditButton;