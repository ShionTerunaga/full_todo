'use client'
import { getTodo } from "@/api/todo";
import ja from "@/shared/ja";
import { isCmptoggleItems } from "@/shared/data";
import useSWR from "swr";
import linkName from "@/shared/linkName";
import DrawingTodo from "../drawingTodo";
interface props{
    id:string|null;
    toggle:string;
}
const TodoList = ({
    id,
    toggle
}:props) => {
    const URL:string=`${linkName.getTodo}${id as string}`;
    const {data,isLoading}=useSWR(
        URL,
        getTodo,
    );
    if (isLoading)return (
        <div>
            <p>{ja.todo.logingMsg}</p>
        </div>
    );
    return (
        <>
            {toggle===isCmptoggleItems[0].value?(
                <DrawingTodo
                    data={data}
                    isComplete={false}
                    id={id}
                />
            ):(
                <DrawingTodo
                    data={data}
                    isComplete={true}
                    id={id}
                />
            )}
        </>
    );
}

export default TodoList;