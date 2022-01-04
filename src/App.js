import React from "react";
import './App.css';
import Counter from './components/Counter';
import Todo from "./components/Todo";

export default class AppShowRenderProps extends React.Component{
    
 
    render(){
       
        return(
          <div>
            <Todo />
            <Counter />
          </div>
        );
    }
}