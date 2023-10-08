import { signupType } from "@/shared/type";
import { Button } from "@mui/material";
import { BaseSyntheticEvent } from "react";

interface props{
    submitEvent:(e?: BaseSyntheticEvent<object, any, any> | undefined)=>Promise<void>;
    buttonTitle:string;
}
const SubmitButton = ({submitEvent,buttonTitle}:props) => {
    return (
        <Button
            variant="outlined"
            onClick={submitEvent}
        >
            {buttonTitle}
        </Button>
    );
}

export default SubmitButton;