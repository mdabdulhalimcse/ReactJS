import React, { useState } from "react";
import Button from "./components/Button";
import ShowCount from "./components/ShowCount";
import Title from "./components/Title";

export default function App(){
    const [count,setCount] = useState(0); 
    const [count2,setCount2] = useState(0); 

    const addOne = () => {
        setCount((prevState) => prevState + 1);
    }

    const addFive = () => {
        setCount2((prevState) => prevState + 5);
    }

        return(
          <div>
            <Title />
            <ShowCount title="Counter 1" count={count} />
            <Button handleClick={addOne}>Click</Button>
<hr/>
            <ShowCount title="Counter 2" count={count2} />
            <Button handleClick={addFive}>Click+5</Button>
          </div>
        );
}