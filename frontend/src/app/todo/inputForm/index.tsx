import { TextField } from "@mui/material";
import { Dispatch, SetStateAction } from "react";

interface props{
    labelName:string;
    value:string;
    setValue:Dispatch<SetStateAction<string>>;
}
const InputForm = ({labelName,value,setValue}:props) => {
    return (
        <div>
            <TextField
                required
                value={value}
                onChange={(e)=>setValue(e.target.value)}
            />
        </div>
    );
}

export default InputForm;