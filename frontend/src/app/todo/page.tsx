'use client'
import { useSearchParams } from "next/navigation";
const Todo = () => {
    const searchParams=useSearchParams();
    const name=searchParams.get('name');
    const id=searchParams.get('id');

    return (
        <div>
            こんにちは。{name}さん。
        </div>
    );
}

export default Todo;