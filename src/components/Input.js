import React from "react";

 function Input({type, placeholder}, ref){
    return <input type={type} ref={ref} placeholder={placeholder} />;
}

const forwardedInput = React.forwardRef(Input);

export default forwardedInput;