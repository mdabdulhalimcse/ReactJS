import React from 'react';
import ThemeContext from '../contexts/themeContext';
import Counter from "./Counter";
import HoverCounter from "./HoverCounter";

export default class ContentClass extends React.Component {

  render(){
      const { theme, switchTheme } = this.context;
    return(
        <div>
            <h1>This is a content </h1>
            {/* <Counter >
                {(count, increamentCount) => (
                    <ThemeContext.Consumer>
                    { ({theme, switchTheme}) => (
                        <HoverCounter count={count} increamentCount={increamentCount} theme={theme} switchTheme={switchTheme}  />
                    )}</ThemeContext.Consumer>
                )}
            </Counter> */}
            <Counter >
                {(count, increamentCount) => (
                
                        <HoverCounter count={count} increamentCount={increamentCount} theme={theme} switchTheme={switchTheme}  />
                
                )}
            </Counter>
        </div>
    )
  }
}

ContentClass.contextType = ThemeContext;