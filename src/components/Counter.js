import { useState } from "react";

export default function Counter(){
    const [count, setCount] = useState(0);

    const addFive = () =>{
        let i = 0;
        while( i < 5 ){
            setCount((prevState) => prevState + 1);
            i++;
        }
        
    }
    return(
        <div>
            {count}
            <p>
                {/* <button type="button" onClick={() =>setCount(count + 1) } >Increament++</button>  */}
                
                <button type="button" onClick={() =>setCount((precStateValue) => precStateValue +1) } >Increament++</button>

                <button type="button" onClick={addFive} >Increament + 5 </button>
            </p>
        </div>
    )
}