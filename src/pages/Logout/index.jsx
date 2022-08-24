import {useNavigate} from "react-router-dom";
import {useUserContext} from "../../providers/UserContextProvider";
import {useEffect} from "react";

const LogoutPage = () => {
    const navigate = useNavigate();
    const { removeUser } = useUserContext();

    useEffect(() => {
        removeUser();
        navigate('/sign-in');
    }, [navigate, removeUser]);

    return null;
}

export default LogoutPage;