import {CardElement} from "./CardElements";

const Card = ({ children, ...props }) => {
    return (
        <CardElement {...props}>
            {children}
        </CardElement>
    );
}

export default Card;