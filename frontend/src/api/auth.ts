import ja from "@/shared/ja";
import linkName from "@/shared/linkName";
import { resSignupData, signupType } from "@/shared/type";
//signupのAPI送信
export const signup=async(data:signupType)=>{
    const res=await fetch(linkName.signupApi,{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
    });
    const resJson=await res.json()
    if(resJson.data===ja.signup.alradyHaveAccount){
        return [];
    }else{
        return resJson.data as resSignupData[];
    }
    
}