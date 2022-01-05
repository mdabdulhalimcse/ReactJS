import { useEffect, useState } from "react";

export default function MyComponent (){
    const [count, setCount] = useState(0);
   const [text,setText] = useState('');

    useEffect(() =>{
        console.log('useEffect count is called or render');
        document.title = `Clicked ${count} times`;
    },[count])

    const addClick = () => {
        setCount((prevState) => prevState + 1 );
    }
    
    return(
        <div>
        <p> 
            <input type="text" onChange={(e)  => setText(e.target.value)} />
        </p>
            <p>
                <button type="button" onClick={addClick}>Click</button>
            </p>
        </div>
    )
}