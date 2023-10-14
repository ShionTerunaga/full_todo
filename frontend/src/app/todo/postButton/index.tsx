import { inputTodo } from "@/shared/type";
import { Button } from "@mui/material";

interface props{
    clickEvent:()=>Promise<void>;
    buttonTitle:string;
    isDisabled:boolean;
}
const PostButton = ({clickEvent,buttonTitle,isDisabled}:props) => {
    return (
        <Button
            variant="contained"
            onClick={clickEvent}
            disabled={isDisabled}
        >
            {buttonTitle}
        </Button>
    );
}

export default PostButton;