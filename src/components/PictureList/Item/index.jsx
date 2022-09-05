import {PictureListItemElement, RadioElement} from "./PictureListItemElements";

const PictureListItem = ({children, ...props}) => {
    return (
        <PictureListItemElement {...props}/>
    );
}



export default PictureListItem;