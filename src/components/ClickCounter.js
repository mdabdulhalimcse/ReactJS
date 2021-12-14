import React from 'react';

export default class ClickCounter extends React.Component{

      render(){
        const {count , increamentCount}  = this.props;
        return(
            <button type='button' onClick={increamentCount}>Click {count} times  </button>
        )
    }
}