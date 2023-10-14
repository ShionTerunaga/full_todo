'use client'
import InputForm from "@/app/components/inputForm";
import ja from "@/shared/ja";
import { signupValidation } from "@/shared/rules";
import { resAuthData, signupType } from "@/shared/type";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import styles from "./style.css";
import SubmitButton from "@/app/components/submitButton";
import RoutingButton from "@/app/components/routingButton";
import linkName from "@/shared/linkName";
import { signup } from "@/api/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";

const SignupForm = () => {
    const router=useRouter();
    const { register, 
            handleSubmit,
            formState:{errors}
        } = useForm<signupType>({
        resolver: yupResolver(signupValidation),
    });
    const onSubmit=async(data:signupType)=>{
        const res:resAuthData[]=await signup(data);
        if(res.length===0){
            alert(ja.signup.alradyHaveAccount)
        }else{
            router.push(`/todo?id=${res[0].id}&name=${res[0].name}`)
        }
    };
    return (
        <div>
            <div className={styles.inputText}>
                <InputForm
                    labelName={ja.signup.attribute.name.labelName}
                    register={register('name')}
                    error={'name' in errors}
                    helperText={errors.name?.message} 
                    typeName={undefined}             
                />
            </div>
            <div className={styles.inputText}>
                <InputForm
                    labelName={ja.signup.attribute.email.labelName}
                    register={register('email')}
                    error={'email' in errors}
                    helperText={errors.email?.message} 
                    typeName={ja.signup.attribute.email.typeName}                
                />
            </div>
            <div className={styles.inputText}>
                <InputForm
                    labelName={ja.signup.attribute.password.labelName}
                    register={register('password')}
                    error={'password' in errors}
                    helperText={errors.password?.message} 
                    typeName={ja.signup.attribute.password.typeName}               
                />
            </div>
            <div className={styles.inputButton}>
                <SubmitButton
                    submitEvent={handleSubmit(onSubmit)}
                    buttonTitle={ja.signup.buttonTitle}
                />
            </div>
            <div className={styles.inputButton}>
                <RoutingButton
                    linkName={linkName.home}
                    linkTitle={ja.signup.gobackBotton}
                />
            </div>
        </div>
    );
}

export default SignupForm;