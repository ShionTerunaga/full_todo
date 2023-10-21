import ja from "@/shared/ja";
import linkName from "@/shared/linkName";
import { Button } from "@mui/material";
import Link from "next/link";
import styles from "./style.css";

const SignOutButton = () => {
    return (
        <div className={styles.containar}>
            <Link href={linkName.home}>
                <Button variant="text">
                    {ja.todo.signout}
                </Button>
            </Link>
        </div>
    );
}

export default SignOutButton;