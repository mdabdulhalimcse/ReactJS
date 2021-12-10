import React from "react";

export default class ClickCounter extends React.Component{
    state = {
        count: 0,
    }

    IncreamentCount = ()=>{
        this.setState((previousState)=>({
            count: previousState.count + 1
        }))
    }

    render(){
        const {count } = this.state;
        return(
                <button type="button" onClick={this.IncreamentCount}>Clicked {count} times</button>
        );
    }
}

