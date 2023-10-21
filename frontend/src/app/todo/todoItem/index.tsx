import { todoType } from "@/shared/type";
import styles from "./style.css";
import EditButton from "../editButton";
import CheckButton from "../checkButton";
import DeleteButton from "../deleteButton";
import { Dispatch, SetStateAction, useState } from "react";
import EditTextField from "../editTextField";

interface props{
    todo:todoType;
    setTodo:Dispatch<SetStateAction<todoType[]>>;
    userid:string|null;
    isComplete:boolean;
    setIsComplete:Dispatch<SetStateAction<todoType[]>>;
    setIsImcomplete:Dispatch<SetStateAction<todoType[]>>;
    isChecked:boolean;
}
const TodoItem = ({
    todo,
    userid,
    isComplete,
    setTodo,
    setIsComplete,
    setIsImcomplete,
    isChecked,
}:props) => {
    const [isEdit,setIsEdit]=useState<boolean>(false);
    const [inputText,setInputText]=useState<string>(todo.todo)
    return (
        <div className={styles.itemBox}>
            <div className={styles.textbox}>
                {isEdit?(
                    <EditTextField
                        value={inputText}
                        setValue={setInputText}
                    />
                ):(
                    <p>{todo.todo}</p>
                )}
            </div>
            <div className={styles.editButtons}>
                <EditButton
                    isEdit={isEdit}
                    setIsEdit={setIsEdit}
                    userid={userid}
                    setTodo={setTodo}
                    isComplete={isComplete}
                    value={inputText}
                    todo={todo}
                />
                <CheckButton 
                    isEdit={isEdit} 
                    todo={todo} 
                    setIsComplete={setIsComplete} 
                    setIsImcomplete={setIsImcomplete}
                    userid={userid}  
                    isChecked={isChecked}
                />
                <DeleteButton
                    isEdit={isEdit}
                    userid={userid}
                    itemid={todo.id}
                    setIsComplete={setIsComplete} 
                    setIsImcomplete={setIsImcomplete}
                />
            </div>
        </div>
    );
}

export default TodoItem;