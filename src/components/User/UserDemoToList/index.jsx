import ParticlesBg from "particles-bg";
import React from "react";
import {MenuLink} from "../../Dropdown/Menu/MenuElements";
import {NavLink as Link} from "react-router-dom";

const UserDemoToList = (props) => {
    console.log(props)
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
                                        <h4 className={"me-3"}>{props.name}</h4>
                                    </div>

                                </div>



                            </div>
                            <div className={"col-12 col-md-8"}>
                            </div>
                            <Link to={props.route}>
                                <button className="float-end blob-btn-border-gold-md">
                                    Discover
                                    <span className="blob-btn-border-gold-md__inner">
                                  <span className="blob-btn-border-gold-md__blobs">
                                    <span className="blob-btn-border-gold-md__blob"/>
                                    <span className="blob-btn-border-gold-md__blob"/>
                                    <span className="blob-btn-border-gold-md__blob"/>
                                    <span className="blob-btn-border-gold-md__blob"/>
                                  </span>
                                </span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UserDemoToList;
