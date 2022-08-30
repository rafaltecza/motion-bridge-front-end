import {AvatarElement} from "./AvatarElements";

const UserAvatar = ({alt, src, name, classes}) => {

    if(name === undefined) {
        name = "Unknown User";
    }

    function stringToColor(string) {
        let hash = 0;
        let i;

        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = '#';

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */

        return color;
    }

    function stringAvatar(name) {
        //take first letter from name
        const stringName = name && name.toString();
        const children = name && `${stringName?.includes(" ") ? `${stringName?.split(' ')[0][0]}${stringName?.split(' ')[1][0]}` : `${stringName?.charAt(0)}`}`;
        return {
            sx: {
                bgcolor: stringToColor(name),
            },
            children: children,
        };
    }


    return (
        <AvatarElement className={classes} alt={alt} src={src} {...stringAvatar(name)}/>
    );
}

export default UserAvatar;