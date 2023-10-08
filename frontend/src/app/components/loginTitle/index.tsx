interface props{
    title:string;
    instruction:string;
}
const LoginTitle = ({title,instruction}:props) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{instruction}</p>
        </div>
    );
}

export default LoginTitle;