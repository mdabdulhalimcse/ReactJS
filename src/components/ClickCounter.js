import withCounter from "./HOC/withCounter";

const  ClickCounter = (props) => {
const {  count, IncreamentCount } = props;
    return(
        <div>
            <button type="button" onClick={ IncreamentCount}>Clicked {count } times</button>
        </div>
    )

}

export default withCounter(ClickCounter);