import React, { useState } from "react";
import MyComponent from "./components/MyComponentClass";

export default function App(){
    const [show, setShow] = useState(true);       
        return(
          <div>
            <div>  {show && <MyComponent/>}</div>
      <p>
          <button type="button" onClick={() => setShow((prevShow) => !prevShow)} >
              {show ? 'Hide Clock' : 'Show Clock' }
          </button>
      </p>
          </div>
        );
}