import { signupType } from "@/shared/type";
import { TextField } from "@mui/material";
import { UseFormRegisterReturn } from "react-hook-form";
interface props{
    labelName:string;
    register:UseFormRegisterReturn<"name"|"email"|"password">;
    error:boolean;
    typeName:string|undefined;
    helperText:string|undefined;
}
const InputForm = ({labelName,register,error,typeName,helperText}:props) => {
    return (
        <TextField
            required
            {...register}
            label={labelName}
            error={error}
            type={typeName}
            helperText={helperText}
        />
    );
}

export default InputForm;