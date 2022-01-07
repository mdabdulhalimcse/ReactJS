import React from "react";

function Title(){
    console.log('render Title component');
    return <h1>Welcome to react Callback Hook Tutorial</h1>
}
export default React.memo(Title);