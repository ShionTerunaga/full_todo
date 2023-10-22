'use client'
import Title from "../components/title";
import Greeting from "./greeting";
import styles from "./style.css";
import NotLogin from "./notLogin";
import TodoInputForm from "./todoInputForm";
import TodoList from "./todoList";
import { useState } from "react";
import { isCmptoggleItems } from "@/shared/data";
import IsCompleteToggle from "./isCompleteToggle";
import SignOutButton from "./signoutButton";
const Todo = ({
    searchParams
}:{
    searchParams:{
        [key:string]:string|null
    }
}) => {
    const id=searchParams.id;
    const name=searchParams.name;
    const [toggleItem,setToggleItem]=useState<string>(isCmptoggleItems[0].value);
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
                    />
                    <IsCompleteToggle 
                        toggle={toggleItem} 
                        setToggle={setToggleItem}
                    />
                    <TodoList
                        id={id}
                        toggle={toggleItem}
                    />
                    <SignOutButton/>
                </>
            ):(
                <NotLogin/>
            )}
        </main>
    );
}

export default Todo;