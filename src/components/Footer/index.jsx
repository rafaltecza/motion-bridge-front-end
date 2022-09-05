import React from 'react';
import {Footer, FooterColumn, FooterLink, FooterText, FooterUl} from "./FooterElements";

const Index = () => {
    return (
        <Footer>
            <div className={"row mb-2"}>
                <FooterColumn className={"col-sm-3 col-md-6"}>
                    <h6 className={"my-3"}><b>Navigation</b></h6>
                    <FooterUl>
                        <li>
                            <FooterLink to="/sign-up">
                                <FooterText>Sign Up</FooterText>
                            </FooterLink>
                        </li>
                        <li>
                            <FooterLink to="/sign-in">
                                <FooterText>Sign In</FooterText>
                            </FooterLink>
                        </li>
                    </FooterUl>
                </FooterColumn>

                <FooterColumn className={"col-sm-3 col-md-6"}>
                    <h6 className={"my-3"}><b>Materiały referencyjne</b></h6>
                    <FooterUl>
                        <li>
                            <FooterLink to="/cookie">
                                <FooterText>Cookie Preferences</FooterText>
                            </FooterLink>
                        </li>
                    </FooterUl>
                </FooterColumn>

            </div>
            <hr/>
            <div className={"row"}>
                <div className={"col-sm-12 col-md-4"}>
                    <FooterLink to="/">
                        <h3>Motion Bridge</h3>
                    </FooterLink>
                </div>
                <div className={"col-sm-12 col-md-8"}>
                    <FooterText>
                        ©{(new Date().getFullYear())} Motion Bridge Inc. Wszystkie prawa zastrzeżone. Motion Bridge Inc. jest znakiem towarowym lub zarejestrowanym znakiem handlowym Motion Bridge, Inc.
                    </FooterText>
                </div>
            </div>


            {/*<div className={"container"}>*/}
            {/*    <div className={"row"}>*/}
            {/*        <div className={"col-sm-3 col-md-6"}>*/}
            {/*            <h4>Lorem Ipsum</h4>*/}
            {/*            <ul>*/}

            {/*            </ul>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </Footer>
    );
};

export default Index;