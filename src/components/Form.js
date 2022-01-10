import React, { useEffect, useRef } from "react";

export default function Form(){
    const inputRef = useRef(null);

    useEffect(() => {
      inputRef.current.focus();
    },[]);

    return(
        <div>
            <input ref={inputRef} type="text" placeholder="enter something" />
        </div>
    )
}