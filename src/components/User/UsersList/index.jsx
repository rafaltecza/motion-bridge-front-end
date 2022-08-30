import React from "react";
import UsersDemoToList from "../UserDemoToList"
import {getUsers} from "../../../api/backend/user";
import {useMutation} from "@tanstack/react-query";
const {useEffect} = require("react");


const UsersList = () => {

    const getPacketsRes = useMutation(getUsers);
    const [packet, setPacket] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    const onSuccess = async (data) => {
        setPacket(data.data);
        setIsLoading(true);
    }

    const onError = (error) => {
        setIsLoading(false);
        console.log("ERROR :(");
    }

    useEffect(() => {
        const fetchData = async () =>
            await getPacketsRes
                .mutateAsync(
                    {
                    }, {
                        onSuccess,
                        onError
                    }
                )
        fetchData();
    }, [packet]);



    return (
        <>
            {isLoading ? (
                <div>
                    {packet.map(({ name,email,isVerified}) => (
                        <div key={1}>
                            <UsersDemoToList
                                name={name}
                                route={"profile-presenter-instagram"}
                                label={email}
                                id={isVerified.toString()}

                                         backgroundType={"lines"}/>
                        </div>
                    ))}
                </div>
            ) : (
                <>LOADING ...</>
            )}
        </>
    );


}

export default UsersList;