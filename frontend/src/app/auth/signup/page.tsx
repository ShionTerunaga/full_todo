import LoginTitle from "@/app/components/loginTitle";
import ja from "@/shared/ja";
import SignupForm from "./signupForm";
import styles from "./style.css";

const Signup = () => {
    return (
        <main className={styles.containar}>
            {/*新規登録のタイトル*/}
            <LoginTitle
                title={ja.signup.title}
                instruction={ja.signup.instruction}
            />
            {/*ログインのフォーム*/}
            <SignupForm/>
        </main>
    );
}

export default Signup;