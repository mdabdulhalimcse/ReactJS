import { useState } from "react";

 function Todo() {
    const [todo, setTodo] = useState('');
    const [warning, setWarning] = useState(null);

    const handleInput = (e) => {
        const inputValue = e.target.value;
        const updatedWarning = inputValue.includes('.js')
        ? 'You need JavaScript skill to complete the task. Do you have it.?'
        : null;

       setTodo(inputValue);
       setWarning(updatedWarning);
    }

    return(
        <div>
            <h2>Welcome to Todo Functional Component</h2>
        <p>{todo}</p>
        <p>
            <textarea name='todo' value={todo} onChange={handleInput} />
        </p>
        <hr/>
        <h2>{warning || 'Good choice!'}</h2>
    </div>
    )
}

export default Todo;