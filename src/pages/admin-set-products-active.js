import React from 'react'
import SetProductActive from "./SetProductActive";

const AdminSetProductActive = () => {
    return (
        <>
            <div className={"container"}  style={{
                minHeight: '90vh',
                fontFamily: "Poppins, sans-serif"
            }}>
                <div>
                    <div className={"row my-4"}>
                        <div className={"col-12 col-md-12"}>
                            <div className={"card card-mb py-4 px-4 h-100"}>
                                <div className={"card-body"}>
                                    <h3><b>Set Product Active / Inactive</b></h3>
                                    <SetProductActive/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminSetProductActive;