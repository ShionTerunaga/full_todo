import { isCmptoggleItems } from "@/shared/data";
import { todoToggleType } from "@/shared/type";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { Dispatch, SetStateAction } from "react";
interface props{
    toggle:string;
    setToggle:Dispatch<SetStateAction<string>>;
}
const IsCompleteToggle = ({toggle,setToggle}:props) => {
    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        setToggle(newAlignment);
    };
    
    return (
        <ToggleButtonGroup
            color="primary"
            value={toggle}
            exclusive
            onChange={handleChange}
            aria-label="Platform"
        >
            {isCmptoggleItems.map((item:todoToggleType,index:number)=>(
                <ToggleButton 
                    key={index} 
                    value={item.value}
                >
                    {item.content}
                </ToggleButton>
            ))}
        </ToggleButtonGroup>
    );
}

export default IsCompleteToggle;