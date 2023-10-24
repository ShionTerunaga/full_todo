'use client'
import { todoType } from "@/shared/type";
import IsComplete from "../isComplete";
import ja from "@/shared/ja";
import TodoItem from "../todoItem";
import styles from "./style.css";
import { useEffect, useState } from "react";

interface props{
    data:todoType[]|undefined;
    isComplete:boolean;
    id:string|null;
}

const DrawingTodo = ({data,isComplete,id}:props) => {
    const [selectData,setSelectData]=useState<todoType[]>([]);
    useEffect(()=>{
        if(isComplete&&data){
            setSelectData(data.filter((item:todoType)=>item.checked===1));
        }else if(data){
            setSelectData(data.filter((item:todoType)=>item.checked===0));
        }
    },[data,isComplete]);
    return (
        <div className={styles.containar}>
            {data?(
                <IsComplete
                title={ja.todo.imcomplete}
                isComplete={isComplete}
                numOfimCmp={selectData.length}
            >
                {selectData.map((item:todoType)=>(
                    <div key={item.id}>
                        <TodoItem 
                            todo={item}
                            userid={id}
                            isComplete={isComplete}
                            isChecked={isComplete}
                        />
                    </div>
                ))}
            </IsComplete>
            ):(
                <p>投稿がありません</p>
            )}
        </div>
    );
}

export default DrawingTodo;