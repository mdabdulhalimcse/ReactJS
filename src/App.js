import React, { useCallback, useMemo, useState } from "react";
import Button from "./components/Button";
import ShowCount from "./components/ShowCount";
import Title from "./components/Title";

export default function App(){
    const [count,setCount] = useState(0); 
    const [count2,setCount2] = useState(0); 

    const addOne = useCallback(() => {
      console.log('render Function addOne');
      setCount((prevState) => prevState + 1);
  },[])

    const addFive = useCallback(() => {
      console.log('render Function addFive');
      setCount2((prevState) => prevState + 5);
  },[])

  const isEvenOrOdd = useMemo(() =>{
    let i = 0;
    while( i < 900000000) i++;
    return count % 2 === 0;
  },[count]);

        return(
          <div>
            <Title />
            <ShowCount title="Counter 1" count={count} />
            <span>{isEvenOrOdd ? 'Even' : 'Odd'}</span>
            <Button handleClick={addOne}>Click</Button>
<hr/>
            <ShowCount title="Counter 2" count={count2} />
            <Button handleClick={addFive}>Click+5</Button>
          </div>
        );
}