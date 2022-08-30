import Card from "../../Card";
import CardContent from "../../Card/Content";
import {CardAnimationPreviewElement} from "./AnimationCardElements";

const AnimationCard = ({ children, ...props }) => {
    return (
        <CardAnimationPreviewElement>
            <CardContent>
                {children}
            </CardContent>
        </CardAnimationPreviewElement>
    );
}

export default AnimationCard;