import EditRoundedIcon from '@mui/icons-material/EditRounded';
import DoneOutlineIcon from '@mui/icons-material/DoneOutline';
import { IconButton } from '@mui/material';
import { Dispatch, SetStateAction } from 'react';
import { todoType } from '@/shared/type';
import { changeTodo } from '@/api/todo';
interface props{
    isEdit:boolean;
    setIsEdit:Dispatch<SetStateAction<boolean>>;
    userid:string|null;
    setTodo:Dispatch<SetStateAction<todoType[]>>;
    isComplete:boolean;
    value:string;
    todo:todoType
}
const EditButton = ({
    isEdit,
    setIsEdit,
    userid,
    setTodo,
    isComplete,
    value,
    todo,
}:props) => {
    const doneHandleClick=async()=>{
        const newData:todoType={
            id:todo.id,
            todo:value,
            checked:todo.checked,
        }
        const data:todoType[]=await changeTodo(userid as string,newData);
        if(isComplete){
            setTodo(data.filter(item=>item.checked===1));
        }else{
            setTodo(data.filter(item=>item.checked===0));
        }
        setIsEdit(false);
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