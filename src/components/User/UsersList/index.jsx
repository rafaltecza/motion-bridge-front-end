import React from "react";
import UsersDemoToList from "../UserDemoToList"
import {useMutation} from "@tanstack/react-query";
import {requestUsers} from "../../../api/backend/user";
const {useEffect} = require("react");

const UsersList = () => {

    const getPacketsRes = useMutation(requestUsers);
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
            {true ? (
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