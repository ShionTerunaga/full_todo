import LoginTitle from "@/app/components/loginTitle";
import styles from "./style.css";
import ja from "@/shared/ja";
import LoginForm from "./loginForm";

const Login = () => {
    return (
        <main className={styles.containar}>
            {/*ログイン画面のタイトル*/}
            <LoginTitle
                title={ja.login.title}
                instruction={ja.login.instruction}
            />
            <LoginForm/>
        </main>
    );
}

export default Login;