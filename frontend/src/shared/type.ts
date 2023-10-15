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
export type resAuthData={
    name:string;
    email:string;
    password:string;
    id:string;
}
//todoの型
export type inputTodo={
    todo:string;
}

//todopostの型
export type todoType={
    id:string;
    todo:string;
    checked:number;
}

//todoToggleの型
export type todoToggleType={
    value:string;
    content:string;
}