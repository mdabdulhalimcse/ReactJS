import React from "react";

function ShowCount({title,count}){
    console.log(`rendering showCount componet count is : ${count}`)
    return(
        <p>
            {title} is {count}
        </p>
    )
}
export default React.memo(ShowCount);