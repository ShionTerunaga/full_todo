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
export const getTodo=async(URL:string)=>{
    const res=await fetch(URL);
    const resData=await res.json();
    return resData.data as todoType[];
}
//todo編集
export const changeTodo=async(userid:string,data:todoType)=>{
    const res=await fetch(`${linkName.putTodo}${userid}`,{
        method:"PUT",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    });
    const resData=await res.json();
    return resData.data as todoType[];
}
//todo削除
export const deleteTodo=async(userid:string,itemid:string)=>{
    const res=await fetch(`${linkName.deleteTodo}${userid}/${itemid}`,{
        method:"DELETE",
    });
    const resData=await res.json();
    return resData.data as todoType[];
}