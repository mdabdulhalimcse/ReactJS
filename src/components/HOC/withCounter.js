import React from "react";

const withCounter = ( OriginalComponent) =>{
    class NewComponent extends React.Component{
        state = {
            count: 0,
        }
    
        IncreamentCount = ()=>{
            this.setState((previousState)=>({
                count: previousState.count + 1
            }))
        }
        render(){
            const { count   } = this.state;
            return <OriginalComponent  count = {count} increamentCount={this.IncreamentCount} />

        }
    }
    return NewComponent;
}

export default withCounter;