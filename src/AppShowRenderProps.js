import ClickCounter from "./components/renderProps/ClickCounter"
import Counter from "./components/renderProps/Counter"
import HoverCounter from "./components/renderProps/HoverCounter"

export default function AppShowRenderProps(){
    return(
        <div>
            <Counter render={(count, increamentCount) =>  (<ClickCounter count = {count} increamentCount={increamentCount} /> )} />
           
            <Counter render={(count, increamentCount) =>  (<HoverCounter count = {count} increamentCount={increamentCount} /> )} />
        </div>
    )
}