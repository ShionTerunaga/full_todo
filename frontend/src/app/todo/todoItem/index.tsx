import { todoType } from "@/shared/type";
import styles from "./style.css";
import EditButton from "../editButton";
import CheckButton from "../checkButton";
import DeleteButton from "../deleteButton";
import { Dispatch, SetStateAction, useState } from "react";
import EditTextField from "../editTextField";

interface props{
    todo:todoType;
    userid:string|null;
    isComplete:boolean;
    isChecked:boolean;
}
const TodoItem = ({
    todo,
    userid,
    isComplete,
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
                    value={inputText}
                    todo={todo}
                />
                <CheckButton 
                    isEdit={isEdit} 
                    todo={todo} 
                    userid={userid}  
                    isChecked={isChecked}
                />
                <DeleteButton
                    isEdit={isEdit}
                    userid={userid}
                    itemid={todo.id}
                />
            </div>
        </div>
    );
}

export default TodoItem;