import ja from "@/shared/ja";
import { ReactNode } from "react";
import styles from "./style.css";

interface props{
    title:string;
    isComplete:boolean;
    numOfimCmp:number;
    children:ReactNode[];
}
const IsComplete = ({title,isComplete,numOfimCmp,children}:props) => {
    return (
        <div className={styles.containar}>
            <div>
                <h2>{title}</h2>
            </div>
            <div>
                <p>{`${numOfimCmp}${ja.todo.numOfPieces}`}</p>
            </div>
            <div className={isComplete?styles.completeBox:styles.imcompleteBox}>
            {children.map((item:ReactNode,index:number)=>(
                    <div key={index}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default IsComplete;