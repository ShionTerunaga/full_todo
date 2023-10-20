import { TextField } from "@mui/material";
import { ChangeEvent, Dispatch, SetStateAction } from "react";
interface props{
    value:string;
    setValue:Dispatch<SetStateAction<string>>;
}
const EditTextField = ({value,setValue}:props) => {
    const handleChange=(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        setValue(e.target.value);
    }
    return (
        <TextField 
            id="standard-basic" 
            label="" 
            variant="standard"
            value={value}
            onChange={(e)=>handleChange(e)}
        />
    );
}

export default EditTextField;