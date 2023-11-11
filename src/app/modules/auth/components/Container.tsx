import React, {FC, useEffect} from "react";
import {encryptEmail, toAbsoluteUrl} from "../../../../_theme/helpers";
import {AuthButton} from "../../components";
import {ChildrenProps} from "../../../../config-global";
import {useLocation} from "react-router-dom";
import Logout from "./Logout";

const images = {
    image1: "https://app.leonardo.ai/img/login-hero-images/Celestial.webp",
    image2: "https://app.leonardo.ai/img/login-hero-images/FemaleAdventurer5.webp"
}

const Container: FC<ChildrenProps> = ({children}) => {

    return (
        <>
            <div className="auth-container">
                <div className="row auth-wrapper">
                    <div className="auth-form">
                        <div className="row">
                            <div className="header">
                                <div className="row">
                                    <div className="col-12 header-logo">
                                        <img src={toAbsoluteUrl('/media/logos/favicon.png')}
                                             alt='mobtwin'
                                             className=''
                                        />
                                    </div>

                                </div>
                                <div className="row mb-2">
                                    <div className="col-12">
                                        <AuthButton title={'google'}
                                                    url={'auth/google'}
                                                    img={'/media/svg/brand-logos/google.svg'}
                                                    width={20}
                                                    height={20}
                                                    alt={'google'}
                                                    className={'second_button-xl mr-2'}
                                        />
                                    </div>
                                </div>
                                <div className="row mb-2">
                                    <div className="col-12">
                                        <AuthButton title={'facebook'}
                                                    url={'auth/facebook'}
                                                    img={'/media/svg/brand-logos/facebook.svg'}
                                                    width={20}
                                                    height={20}
                                                    alt={'facebook'}
                                                    className={'second_button-xl'}
                                        />
                                    </div>
                                </div>
                                <div className="row my-3">
                                    <div className="col-12">
                                        <div className="_separator-or">
                                            <hr aria-orientation="horizontal" className="_separator-hr"/>
                                            <div className="_separator-div">
                                                <p className="_separator-p">OR</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="main">
                                {children}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <a href="#" className="link">Terms of Services</a>
                            </div>
                            <div className="col-6 d-flex justify-content-end align-items-center">
                                <a href="#" className="link">Terms of Services</a>
                            </div>
                        </div>
                    </div>
                    <div className="auth-images"
                         style={{
                             backgroundImage: `url(${toAbsoluteUrl('/media/images/home/meta-tags-banner.webp')})`,
                         }}
                    />
                </div>
            </div>

        </>

    )
}

export {Container}