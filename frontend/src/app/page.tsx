import ja from "@/shared/ja";
import RoutingButton from "./components/routingButton";
import Title from "./components/title";
import linkName from "@/shared/linkName";
import styles from "./style.css";

export default function Home() {
  return (
    <main className={styles.containar}>
      {/*タイトル部分*/}
      <Title/>
      {/*新規登録ページ遷移ボタン*/}
      <RoutingButton
        linkTitle={ja.home.buttonTitle1}
        linkName={linkName.signup}
      />
      {/*ログインページ遷移ボタン*/}
      <RoutingButton
        linkTitle={ja.home.buttonTitle2}
        linkName={linkName.login}
      />
    </main>
  )
}
