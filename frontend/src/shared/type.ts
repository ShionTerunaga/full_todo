//新規登録の時の型
export type signupType={
    name:string;
    email:string;
    password:string;
}

//ログインの時の型
export type loginType={
    email:string;
    password:string;
}
//新規登録でのレスポンスの型
export type resSignupData={
    name:string;
    email:string;
    password:string;
    id:string;
}