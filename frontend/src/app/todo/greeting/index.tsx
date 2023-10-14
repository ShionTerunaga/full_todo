import ja from "@/shared/ja";

interface props{
    name:string;
}
const Greeting = ({name}:props) => {
    return (
        <p>
            {ja.todo.greeting}{name}
        </p>
    );
}

export default Greeting;