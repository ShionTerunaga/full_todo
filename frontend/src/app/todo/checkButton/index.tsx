import { changeTodo } from "@/api/todo";
import linkName from "@/shared/linkName";
import { todoType } from "@/shared/type";
import { Checkbox } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { mutate, useSWRConfig } from "swr";
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
    useSWRConfig();
    const handleChange=async()=>{
        const newIsChecked:number=todo.checked===0?1:0;
        const newTodo:todoType={
            id:todo.id,
            todo:todo.todo,
            checked:newIsChecked
        };
        const data:todoType[]=await changeTodo(userid as string,newTodo);
        mutate(`${linkName.getTodo}${userid}`);
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