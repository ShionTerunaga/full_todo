'use client'
import { ReadonlyURLSearchParams, useSearchParams } from "next/navigation";
import Title from "../components/title";
import Greeting from "./greeting";
import styles from "./style.css";
import NotLogin from "./notLogin";
import TodoInputForm from "./todoInputForm";
import TodoList from "./todoList";
import { useState } from "react";
import { todoType } from "@/shared/type";
const Todo = () => {
    const searchParams:ReadonlyURLSearchParams=useSearchParams();
    const name:string|null=searchParams.get('name');
    const id:string|null=searchParams.get('id');
    const [todo,setTodo]=useState<todoType[]>([]);
    const [imcompleteData,setImcompleteData]=useState<todoType[]>([]);
    const [completeData,setCompleteData]=useState<todoType[]>([]);
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
                    />
                    <TodoList
                        id={id}
                        todos={todo}
                        setTodo={setTodo}
                        completeData={completeData}
                        imcompleteData={imcompleteData}
                        setCompleteData={setCompleteData}
                        setImcompleteData={setImcompleteData}
                    />
                </>
            ):(
                <NotLogin/>
            )}
        </main>
    );
}

export default Todo;