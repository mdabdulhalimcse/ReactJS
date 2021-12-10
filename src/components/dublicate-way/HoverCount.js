import React from "react";

export default class HoverCount extends React.Component{

    state = {
        count: 0
    }

    InceamentCount = () =>{
        this.setState((prevCount) =>({
            count : prevCount.count +1,
        }))
    }
    render(){
        let { count } = this.state;
        return(
            <h1 onMouseOver={this.InceamentCount}>Hovered {count} times </h1>
        );
    }
}