import { useEffect, useState } from "react";

export default function MyComponent (){
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());

    const tick = () =>{
        console.log('Starting timer clock');
        setDate(new Date());
    }

    useEffect(() =>{
        console.log('updating document title');
        document.title = `Clicked ${count} times`;
    },[count]);

    useEffect(() =>{
        console.log('Starting timer clock');
        const interval = setInterval(tick,1000);

        return () => {
            console.log('component unmount!');
            clearInterval(interval);
        }
    },[]);

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