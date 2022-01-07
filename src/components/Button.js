function Button ({handleClick, children}){
    return(
        <p>
            <button type="button" onClick={handleClick} >
                {children}
            </button>
        </p>
    )
}
export default Button;