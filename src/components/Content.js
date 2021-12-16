import { useContext } from 'react';
import ThemeContext from '../contexts/themeContext';
import Counter from "./Counter";
import HoverCounter from "./HoverCounter";

export default function Content() {
    const context = useContext(ThemeContext);
    const { theme, switchTheme } =  context;
    return(
        <div>
            <h1>This is a content </h1>
            {/* <Counter >
                {(count, increamentCount) => {
                    return <ThemeContext.Consumer>
                        { ({theme}) => (
                            <HoverCounter count={count} increamentCount={increamentCount} theme={theme} />
                        )}</ThemeContext.Consumer>
                }}
            </Counter> */}
            <Counter >
                {(count, increamentCount) => (
                
                        <HoverCounter 
                        count={count}
                         increamentCount={increamentCount} 
                         theme={theme}
                          switchTheme={switchTheme}
                            /> 
                )}
            </Counter>
        </div>
    )
}