import { useState } from "react";

export default function Todo() {
    const [todo, setTodo] = useState({
        title:"",
        description: ""
    });

const { title,description} = todo;
    return(
        <div>
            <h2>Welcome to Todo Functional Component</h2>
        <p>{title}</p>
        <p>
            <input type="text" value={title} onChange={(e) =>setTodo({
                ...todo,
                title:e.target.value,
            })} />
        </p>
        <p>
            <textarea name='todo' value={description} onChange={(e) =>setTodo({
                ...todo,
                description:e.target.value,
            })} />
        </p>


    </div>
    )
}