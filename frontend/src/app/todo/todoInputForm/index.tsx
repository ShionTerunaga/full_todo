'use client'

import ja from "@/shared/ja";
import { todoType } from "@/shared/type";
import { Dispatch, SetStateAction, useState } from "react";
import InputForm from "../inputForm";
import PostButton from "../postButton";
import { v4 } from "uuid";
import { postTodo } from "@/api/todo";
interface props{
    id:string;
    setTodos:Dispatch<SetStateAction<todoType[]>>;
    setImcompleteData:Dispatch<SetStateAction<todoType[]>>;
    setCompleteData:Dispatch<SetStateAction<todoType[]>>;
}
const TodoInputForm = ({
    id,
    setTodos,
    setCompleteData,
    setImcompleteData,
}:props) => {
    const [todo,setTodo]=useState<string>("");
    const onClick=async()=>{
        const uuid:string=v4();
        const setData:todoType={
            id:uuid,
            todo:todo,
            checked:0,
        }
        const data:todoType[]=await postTodo(setData,id);
        setTodos(data);
        setTodo("");
        setImcompleteData(data.filter((item:todoType)=>item.checked===0));
        setCompleteData(data.filter((item:todoType)=>item.checked===1));
    };
    return (
        <div>
            <div>
                <InputForm
                    labelName={ja.todo.attribute.todo.labelName}
                    value={todo}
                    setValue={setTodo}
                />
            </div>
            <div>
                <PostButton
                    clickEvent={onClick}
                    buttonTitle={ja.todo.buttonTitle}
                    isDisabled={todo?false:true}
                />
            </div>
        </div>
    );
}

export default TodoInputForm;