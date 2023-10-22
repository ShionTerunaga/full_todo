import { changeTodo } from "@/api/todo";
import { todoType } from "@/shared/type";
import { Checkbox } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
interface props{
    isEdit:boolean;
    todo:todoType;
    userid:string|null;
    isChecked:boolean;
}
const CheckButton = ({
    isEdit,
    todo,
    userid,
    isChecked
}:props) => {
    const handleChange=async()=>{
        const newIsChecked:number=todo.checked===0?1:0;
        const newTodo:todoType={
            id:todo.id,
            todo:todo.todo,
            checked:newIsChecked
        };
        const data:todoType[]=await changeTodo(userid as string,newTodo);
    }
    return (
        <div>
            <Checkbox
                disabled={isEdit}
                onChange={()=>handleChange()}
                checked={isChecked}
            />
        </div>
    );
}

export default CheckButton;