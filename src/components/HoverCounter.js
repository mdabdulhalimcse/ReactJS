export default function HoverCounter({count , increamentCount,theme}){
  
    const style = theme === 'dark' ? { backgroundColor : ' #000', color: ' #ffffff' } : null;

    return(
        <h1 style={style} onMouseOver={increamentCount} >Hovered {count} times</h1>
    )
}