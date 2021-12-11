export default function HoverCounter({count , increamentCount}){
    return(
        <h1 onMouseOver={increamentCount} >Hovered {count} times</h1>
    )
}