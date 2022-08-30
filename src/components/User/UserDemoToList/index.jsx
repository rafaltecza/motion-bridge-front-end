import ParticlesBg from "particles-bg";
import React from "react";

const UserDemoToList = (props) => {
    return (
        <>
            <div className={"row my-3"}>
                <div className={"col-12"}>
                    <div className={"card bg-gradient-bm"}>
                        <div className={"opacity-50"}>
                            <ParticlesBg type={props.backgroundType} bg={{
                                position: "absolute",
                                zIndex: -1,
                                top: 0,
                                left: 0,
                                borderRadius: "6px"
                            }}/>
                        </div>

                        <div className={"card-body text-white p-4 z-1"}>
                            <div className={"d-flex"}>
                                <div className={"row g-0 w-100"}>
                                    <div className={"col-auto"}>
                                        <h3 className={"me-3"}>Username: {props.name} , </h3>
                                    </div>
                                    <div className={"col-auto"}>
                                        <h3 className={"me-3"}>Email: {props.label} , </h3>
                                    </div>
                                    <div className={"col-auto"}>
                                        <h3 className={"me-3"}>Is Verified: {props.id}</h3>
                                    </div>
                                </div>
                            </div>
                            <div className={"col-12 col-md-8"}>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserDemoToList;
