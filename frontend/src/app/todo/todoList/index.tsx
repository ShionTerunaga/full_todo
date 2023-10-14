'use client'
import { getTodo } from "@/api/todo";
import ja from "@/shared/ja";
import { todoType } from "@/shared/type";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Imcomplete from "../imcomplete";
import styles from "./style.css";
import TodoItem from "../todoItem";
interface props{
    id:string|null;
    todos:todoType[];
    setTodo:Dispatch<SetStateAction<todoType[]>>;
    imcompleteData:todoType[];
    setImcompleteData:Dispatch<SetStateAction<todoType[]>>;
    completeData:todoType[];
    setCompleteData:Dispatch<SetStateAction<todoType[]>>;
}
const TodoList = ({
    id,
    todos,
    setTodo,
    completeData,
    imcompleteData,
    setCompleteData,
    setImcompleteData
}:props) => {
    const [loadingMsg,setLodingMsg]=useState<string>(ja.todo.logingMsg);
    
    const firstFunction=async(userId:string)=>{
        const data:todoType[]=await getTodo(userId);
        setTodo(data);
        setImcompleteData(data.filter((item:todoType)=>item.checked===0));
        setCompleteData(data.filter((item:todoType)=>item.checked===1));
    }
    useEffect(()=>{
    if(id){
        firstFunction(id);
        setLodingMsg("");
    }else{
        setLodingMsg(ja.todo.logingMsg)
    }
},[id])
    return (
        <>
            {loadingMsg?(
                <div>
                    <p>{loadingMsg}</p>
                </div>
            ):(
                <div className={styles.containar}>
                    <Imcomplete>
                        {imcompleteData.map((item:todoType)=>(
                            <div key={item.id}>
                                <TodoItem 
                                    todo={item}
                                />
                            </div>
                        ))}
                    </Imcomplete>
                </div>
            )}
        </>
    );
}

export default TodoList;