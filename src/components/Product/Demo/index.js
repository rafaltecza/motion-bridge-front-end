import ParticlesBg from "particles-bg";
import React from "react";
import {MenuLink} from "../../Dropdown/Menu/MenuElements";
import {NavLink as Link} from "react-router-dom";

const ProductDemo = (props) => {
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
                                    <div className={"col-auto"}>
                                        <span className="shadow badge bg-animated-gradient-bp text-white mb-3">
                                            {props.label != null ? (
                                                <h5 className={"mb-0"}>{props.label}</h5>
                                            ) : (
                                                <></>
                                            )}
                                        </span>
                                    </div>
                                    <div className={"col-lg-auto col-12 ms-auto"}>
                                       <span className="shadow badge bg-animated-gradient-gy text-black mb-3 w-100" >
                                            {props.price != null ? (
                                                <h5 className={"mb-0 p-2"}>{props.price}</h5>
                                            ) : (
                                                <></>
                                            )}
                                        </span>
                                    </div>
                                </div>



                            </div>
                            <div className={"col-12 col-md-8"}>
                                <a>Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.</a>
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

export default ProductDemo;
