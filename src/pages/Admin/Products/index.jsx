import React from 'react'
import AddProduct from "../../AddProduct";

const AdminProductsPage = () => {
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
                                    <h3><b>Products Management</b></h3>
                                    <AddProduct/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AdminProductsPage;