import React from "react";
import './App.css';
import MyClassComponent from "./components/MyClassComponent";

export default class App extends React.Component{

    render(){
       
        return(
          <div>
      <p>We </p>
      <MyClassComponent />
          </div>
        );
    }
}