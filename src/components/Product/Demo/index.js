import ParticlesBg from "particles-bg";
import React from "react";

const ProductDemo = (props) => {
    return (
        <>
            <div className={"row my-3"}>
                <div className={"col-12"}>
                    <div className={"card bg-gradient-bm"}>
                        <div className={"opacity-50"}>
                            <ParticlesBg type={props.backgroundType} bg={true} />
                        </div>

                        {/*<ParticlesBg className={"opacity-25"} type={"circle"} bg={true}/>*/}
                        {/*<canvas id="background-stars" width="1920" height="380"></canvas>*/}
                        <div className={"card-body text-white p-4 z-1"}>
                            <div className={"d-flex"}>
                                <h4 className={"me-3"}>Profile Presenter</h4>
                                <span className="shadow badge bg-animated-gradient-bp text-white mb-3 me-auto h-100">
                                    <h5 className={"mb-0"}>Instagram</h5>
                                </span>
                                <span className="shadow badge bg-animated-gradient-gy text-black mb-3" >
                                    <h5 className={"mb-0 p-2"}>9.99$/mo</h5>
                                </span>

                            </div>
                            <div className={"col-12 col-md-8"}>
                                <a>Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content. Some quick example text to build on the card title and make up the bulk of the card's content.</a>
                            </div>
                            <button type="submit" className="float-end blob-btn-border-gold-md">
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
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductDemo;
