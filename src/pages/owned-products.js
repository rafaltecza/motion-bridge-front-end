import React from 'react'

const OwnedProducts = () => {
    return (
        <div className={"container"}  style={{
            minHeight: '90vh',
            fontFamily: "Poppins, sans-serif"
        }}>
            <div>
                <div className={"row my-4"}>
                    <div className={"col-12 col-md-12"}>
                        <div className={"card card-mb py-4 px-4 h-100"}>
                            <h3><b>Owned Products</b></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OwnedProducts;