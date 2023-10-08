import { Button } from "@mui/material";
import Link from "next/link";
import styles from "./style.css";

interface props {
    linkName:string
    linkTitle:string
}
const RoutingButton = ({linkName,linkTitle}:props) => {
    return (
        <div className={styles.button}>
            <Link href={linkName}>
                <Button variant="text">
                    {linkTitle}
                </Button>
            </Link>
        </div>
    );
}

export default RoutingButton;