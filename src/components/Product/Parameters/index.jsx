import Box from "@mui/material/Box";
import {
    ParametersBottomLine,
    ParametersCardDescription,
    ParametersCardElement,
    ParametersCardImage,
    ParametersCardSubtitle, ParametersCardTitle,
    ParametersWrapperElement
} from "./ParametersElements";

const ProductParameters = ({ properties, index = 0 }) => {
    return (
        <ParametersWrapperElement>
            <ParametersCardElement>
                <ParametersCardImage className={`style-${index}`} />
                    {/*<img*/}
                    {/*    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/barbarian.png"*/}
                    {/*    alt="barbarian"/>*/}
                <ParametersCardSubtitle className={`style-${index}`}>Example</ParametersCardSubtitle>
                <ParametersCardTitle>Example</ParametersCardTitle>
                <ParametersCardDescription>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</ParametersCardDescription>
                <ParametersBottomLine className={`style-${index}`}/>
            </ParametersCardElement>
        </ParametersWrapperElement>
    );
}

export default ProductParameters;