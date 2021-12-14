import Counter from "./Counter";
import HoverCounter from "./HoverCounter";

export default function Content({theme}) {

    return(
        <div>
            <h1>This is a content </h1>
            <Counter >
                {(count, increamentCount) => (
                <HoverCounter count={count} increamentCount={increamentCount} theme={theme} />
                )}
            </Counter>
        </div>
    )
}