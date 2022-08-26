import {useNavigate} from "react-router-dom";
import {useUserContext} from "../../providers/UserContextProvider";
import {useEffect} from "react";

export { PrivateRoute };

function PrivateRoute({ children }) {
    const navigate = useNavigate();
    const { isLoggedIn } = useUserContext();

    useEffect(() => {
        if (!isLoggedIn) {
            // not logged in so redirect to login page with the return url
            return navigate('/sign-in', { replace: true });
        }
    }, [isLoggedIn, navigate]);


    // authorized so return child components
    return children;
}

export default PrivateRoute;