import React from 'react'
import ContactForm from "../components/Form/ContactForm";


const Contact = () => {
    return (
        <div className={"container"}  style={{
            minHeight: '90vh',
            fontFamily: "Poppins, sans-serif"
        }}>
            <div>
                <div className={"row my-4"}>
                    <div className={"col-12 col-md-12"}>
                        <div className={"card card-mb py-4 px-4 h-100"}>
                                <h3><b>Contact</b></h3>
                        </div>
                    </div>
                </div>
                <div className={"row my-4"}>
                    <div className={"col-12 col-md-12"}>
                        <div className={"card card-mb py-4 px-4 h-100"}>
                            <div className={"card-body"}>
                                <p>Dont have an account? Create your account, it takes less than minute.</p>
                                <ContactForm/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;