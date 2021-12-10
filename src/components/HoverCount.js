import withCounter from "../components/HOC/withCounter";

const HoverCount = ({count, IncreamentCount})=>{
    return(
        <h1 onMouseOver={IncreamentCount}>Hovered {count} times</h1>
    )
}
export default withCounter(HoverCount);