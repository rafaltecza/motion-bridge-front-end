import React from 'react'
import SettingsNav from "../components/SettingsNav";

const Settings = () => {
    return (
        <div className={"container"}  style={{
            minHeight: '90vh',
            fontFamily: "Poppins, sans-serif"
        }}>
            <div>
                <div className={"row my-4"}>
                    <div className={"col-12 col-md-12"}>
                        <div className={"card card-mb py-4 px-4 h-100"}>
                            <h3><b>Settings</b></h3>
                        </div>
                    </div>
                </div>
                <div className={"row my-4"}>
                    <div className={"col-12 col-md-12"}>
                        <div className={"card card-mb py-4 px-4 h-100"}>
                            <SettingsNav></SettingsNav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;