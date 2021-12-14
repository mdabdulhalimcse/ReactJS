import React from "react"
import ClickCounter from "./components/ClickCounter"
import Counter from "./components/Counter"
import Section from "./components/Section"

export default class AppShowRenderProps extends React.Component{
    state = {
        theme: 'dark'
    }
 
    render(){
        const { theme } = this.state;
        return(
            // <div>
            //     <Counter render={(count, increamentCount) =>  (<ClickCounter count = {count} increamentCount={increamentCount} /> )} />
               
            //     <Counter render={(count, increamentCount) =>  (<HoverCounter count = {count} increamentCount={increamentCount} /> )} />
            // </div>
    
            <div>
                  <Counter >
                {(count, increamentCount) =>  (<ClickCounter count = {count} increamentCount={increamentCount} /> )}
                </Counter>
               
                <Section theme ={theme} />
            </div>
    
        )
    }
}