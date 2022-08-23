

//const Radio with children and props
import {RadioElement} from "./RadioElements";

const Radio = ({children, ...props}) => {
    return (
        <RadioElement {...props}/>
    );
}



export default Radio;