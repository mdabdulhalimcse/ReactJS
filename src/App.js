import React from "react";
import './App.css';
import ClickCounter from "./components/ClickCounter";
import Counter from "./components/Counter";
import Section from "./components/Section";
import ThemeContext from './contexts/themeContext';

export default class AppShowRenderProps extends React.Component{
    state = {
        theme: 'light'
    }
    switchTheme = () =>{
      this.setState(({theme}) => {
        if( theme === 'dark'){
          return {
            theme : 'light',
          }
        }else{
          return {
            theme : 'dark',
          }
        }
      })
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
                <ThemeContext.Provider value={{theme , switchTheme: this.switchTheme}}>
                           <Section  />
                  </ThemeContext.Provider>
            </div>
    
        )
    }
}