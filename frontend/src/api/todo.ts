import linkName from "@/shared/linkName";
import { todoType } from "@/shared/type";

//todo投稿
export const postTodo=async(data:todoType,id:string)=>{
    const res=await fetch(`${linkName.postTodo}${id}`,{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    });
    const resData=await res.json();
    return resData.data as todoType[];
}
//todo取得
export const getTodo=async(id:string)=>{
    const res=await fetch(`${linkName.getTodo}${id}`);
    const resData=await res.json();
    return resData.data as todoType[];
}