import ja from "@/shared/ja";
import { ReactNode } from "react";
import styles from "./style.css";

interface props{
    children:ReactNode[];
}
const Imcomplete = ({children}:props) => {
    return (
        <div className={styles.containar}>
            <div>
                <h2>{ja.todo.imcomplete}</h2>
            </div>
            <div className={styles.imcompleteBox}>
                {children.map((item:ReactNode,index:number)=>(
                    <div key={index}>
                        {item}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Imcomplete;