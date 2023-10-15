import { todoType } from "@/shared/type";
import styles from "./style.css";
import EditButton from "../editButton";
import CheckButton from "../checkButton";
import DeleteButton from "../deleteButton";

interface props{
    todo:todoType;
}
const TodoItem = ({todo}:props) => {
    return (
        <div className={styles.itemBox}>
            <div className={styles.textbox}>
                {todo.todo}
            </div>
            <div className={styles.editButtons}>
                <EditButton/>
                <CheckButton/>
                <DeleteButton/>
            </div>
        </div>
    );
}

export default TodoItem;