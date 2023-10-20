'use client'
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import Title from "../components/title";
import Greeting from "./greeting";
import styles from "./style.css";
import NotLogin from "./notLogin";
import TodoInputForm from "./todoInputForm";
import TodoList from "./todoList";
import { SetStateAction, useState } from "react";
import { todoToggleType, todoType } from "@/shared/type";
import { isCmptoggleItems } from "@/shared/data";
import IsCompleteToggle from "./isCompleteToggle";
const Todo = () => {
    const searchParams:ReadonlyURLSearchParams=useSearchParams();
    const name:string|null=searchParams.get('name');
    const id:string|null=searchParams.get('id');
    const [todo,setTodo]=useState<todoType[]>([]);
    const [imcompleteData,setImcompleteData]=useState<todoType[]>([]);
    const [completeData,setCompleteData]=useState<todoType[]>([]);
    const [toggleItem,setToggleItem]=useState<string>(isCmptoggleItems[0].value);//hoge
    return (
        <main className={styles.containar}>
            {id&&name?(
                <>
                    <Title/>
                    <Greeting
                        name={name}
                    />
                    <TodoInputForm
                        id={id}
                        setTodos={setTodo}
                        setCompleteData={setCompleteData}
                        setImcompleteData={setImcompleteData}
                    />
                    <IsCompleteToggle 
                        toggle={toggleItem} 
                        setToggle={setToggleItem}
                    />
                    <TodoList
                        id={id}
                        todos={todo}
                        setTodo={setTodo}
                        completeData={completeData}
                        imcompleteData={imcompleteData}
                        setCompleteData={setCompleteData}
                        setImcompleteData={setImcompleteData}
                        toggle={toggleItem}
                    />
                </>
            ):(
                <NotLogin/>
            )}
        </main>
    );
}

export default Todo;