'use client'
import { loginValidation } from "@/shared/rules";
import { loginType } from "@/shared/type";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import styles from "./style.css";
import InputForm from "@/app/components/inputForm";
import ja from "@/shared/ja";
import SubmitButton from "@/app/components/submitButton";
import RoutingButton from "@/app/components/routingButton";
import linkName from "@/shared/linkName";

const LoginForm = () => {
    const { register, 
        handleSubmit,
        formState:{errors}
    } = useForm<loginType>({
        resolver: yupResolver(loginValidation),
    });
    const onSubmit=async(data:loginType)=>{
        console.log(data);
    };
    return (
        <div>
            <div className={styles.inputText}>
                <InputForm
                    labelName={ja.login.attribute.email.labelName}
                    register={register('email')}
                    error={'email' in errors}
                    helperText={errors.email?.message} 
                    typeName={ja.login.attribute.email.typeName}                
                />
            </div>
            <div className={styles.inputText}>
                <InputForm
                    labelName={ja.login.attribute.password.labelName}
                    register={register('password')}
                    error={'password' in errors}
                    helperText={errors.password?.message} 
                    typeName={ja.login.attribute.password.typeName}                
                />
            </div>
            <div className={styles.inputButton}>
                <SubmitButton
                    submitEvent={handleSubmit(onSubmit)}
                    buttonTitle={ja.login.buttonTitle}
                />
            </div>
            <div className={styles.inputButton}>
                <RoutingButton
                    linkName={linkName.home}
                    linkTitle={ja.login.gobackBotton}
                />
            </div>
        </div>
    );
}

export default LoginForm;