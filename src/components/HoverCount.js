import withCounter from "../components/HOC/withCounter";

const HoverCount = ({count, increamentCount})=>{
    return(
        <h1 onMouseOver={increamentCount}>Hovered {count} times</h1>
    )
}
export default withCounter(HoverCount);