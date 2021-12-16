import ThemeContext from '../contexts/themeContext';
import Counter from "./Counter";
import HoverCounter from "./HoverCounter";

export default function Content() {

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
                    <ThemeContext.Consumer>
                    { ({theme, switchTheme}) => (
                        <HoverCounter count={count} increamentCount={increamentCount} theme={theme} switchTheme={switchTheme}  />
                    )}</ThemeContext.Consumer>
                )}
            </Counter>
        </div>
    )
}