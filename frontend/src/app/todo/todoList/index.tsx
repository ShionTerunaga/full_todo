'use client'
import { getTodo } from "@/api/todo";
import ja from "@/shared/ja";
import { todoToggleType, todoType } from "@/shared/type";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import Imcomplete from "../isComplete";
import styles from "./style.css";
import TodoItem from "../todoItem";
import { isCmptoggleItems } from "@/shared/data";
import IsComplete from "../isComplete";
interface props{
    id:string|null;
    todos:todoType[];
    setTodo:Dispatch<SetStateAction<todoType[]>>;
    imcompleteData:todoType[];
    setImcompleteData:Dispatch<SetStateAction<todoType[]>>;
    completeData:todoType[];
    setCompleteData:Dispatch<SetStateAction<todoType[]>>;
    toggle:string;
}
const TodoList = ({
    id,
    todos,
    setTodo,
    completeData,
    imcompleteData,
    setCompleteData,
    setImcompleteData,
    toggle
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
            ):toggle===isCmptoggleItems[0].value?(
                <div className={styles.containar}>
                    <IsComplete
                        title={ja.todo.imcomplete}
                        isComplete={false}
                        numOfimCmp={imcompleteData.length}
                    >
                        {imcompleteData.map((item:todoType)=>(
                            <div key={item.id}>
                                <TodoItem 
                                    todo={item}
                                />
                            </div>
                        ))}
                    </IsComplete>
                </div>
            ):(
                <div className={styles.containar}>
                    <IsComplete
                        title={ja.todo.complete}
                        isComplete={true}
                        numOfimCmp={completeData.length}
                    >
                        {completeData.map((item:todoType)=>(
                            <div key={item.id}>
                                <TodoItem 
                                    todo={item}
                                />
                            </div>
                        ))}
                    </IsComplete>
                </div>
            )}
        </>
    );
}

export default TodoList;