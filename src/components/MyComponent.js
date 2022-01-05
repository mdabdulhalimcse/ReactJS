import { useEffect, useState } from "react";

export default function MyComponent (){
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());

    const tick = () =>{
        setDate(new Date());
    }

    useEffect(() =>{
        console.log('useEffect count is called or render');
        document.title = `Clicked ${count} times`;
    })

    const addClick = () => {
        setCount((prevState) => prevState + 1 );
    }
    
    return(
        <div>
            <p>Time: {date.toLocaleTimeString("bn-BD")}</p>
            <p>
                <button type="button" onClick={addClick}>Click</button>
            </p>
        </div>
    )
}