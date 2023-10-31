import React, {FC} from "react";
import {toAbsoluteUrl} from "../../../../_theme/helpers";
import {AuthButton} from "../../components";
import {ChildrenProps} from "../../../../config-global";

const images = {
    image1: "https://app.leonardo.ai/img/login-hero-images/Celestial.webp",
    image2: "https://app.leonardo.ai/img/login-hero-images/FemaleAdventurer5.webp"
}

const Container: FC<ChildrenProps> = ({children}) => {

    return (
        <>
            <div className="auth-container">
                <div className="row auth-wrapper">
                    <div className="col-12 col-md-4 auth-form">
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
                                                    url={'auth/google'}
                                                    img={'/media/svg/brand-logos/facebook.svg'}
                                                    width={20}
                                                    height={20}
                                                    alt={'facebook'}
                                                    className={'second_button-xl'}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row my-1 my-md-2">
                                <div className="_separator-or">
                                    <hr aria-orientation="horizontal" className="_separator-hr"/>
                                    <div className="_separator-div">
                                        <p className="_separator-p">OR</p>
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
                    {/*<div className="col-12 col-md-8 auth-images">*/}
                    {/*    <div className="row h-100">*/}
                    {/*        <div className="col-3 translateY" style={{*/}
                    {/*            backgroundImage: `url(${toAbsoluteUrl('/media/images/home/anime.png')})`,*/}
                    {/*        }}>*/}
                    {/*        </div>*/}
                    {/*        <div className="col-6 translateY" style={{*/}
                    {/*            backgroundImage: `url(${toAbsoluteUrl('/media/images/home/hero_dark_2.png')})`,*/}
                    {/*        }}>*/}
                    {/*        </div>*/}
                    {/*        <div className="col-3 translateY" style={{*/}
                    {/*            backgroundImage: `url(${toAbsoluteUrl('/media/images/home/hero_dark_1.png')})`,*/}
                    {/*        }}>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>
            {/*<div className="container-fluid p-0 bgImage-100"*/}
            {/*     style={{*/}
            {/*         backgroundImage: `url("${images.image1}")`,*/}
            {/*         backgroundSize: "cover"*/}
            {/*     }}*/}
            {/*>*/}
            {/*    <div className="_p-8 blur">*/}
            {/*        <div className="row overflow-hidden height_90vh" style={{borderRadius: 30}}>*/}
            {/*            <div className="col-md-6 col-lg-4 d-flex flex-column _px-9 _py-4 _gray-900">*/}
            {/*                <div className="row d-flex justify-content-center align-items-center">*/}
            {/*                    <div className="col-2">*/}
            {/*                        <img src={toAbsoluteUrl('/media/logos/favicon.png')}*/}
            {/*                             alt='mobtwin'*/}
            {/*                             className=''*/}
            {/*                             style={{width: 60, height: 60}}*/}
            {/*                        />*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <div className="row mb-2">*/}
            {/*                    <div className="col-12">*/}
            {/*                        <AuthButton title={'google'}*/}
            {/*                                    url={'auth/google'}*/}
            {/*                                    img={'/media/svg/brand-logos/google.svg'}*/}
            {/*                                    width={20}*/}
            {/*                                    height={20}*/}
            {/*                                    alt={'google'}*/}
            {/*                                    className={'second_button-xl mr-2'}*/}
            {/*                        />*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <div className="row mb-2">*/}
            {/*                    <div className="col-12">*/}
            {/*                        <AuthButton title={'facebook'}*/}
            {/*                                    url={'auth/google'}*/}
            {/*                                    img={'/media/svg/brand-logos/facebook.svg'}*/}
            {/*                                    width={20}*/}
            {/*                                    height={20}*/}
            {/*                                    alt={'facebook'}*/}
            {/*                                    className={'second_button-xl'}*/}
            {/*                        />*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <div className="row">*/}
            {/*                    <div className="_separator-or">*/}
            {/*                        <hr aria-orientation="horizontal" className="_separator-hr"/>*/}
            {/*                        <div className="_separator-div">*/}
            {/*                            <p className="_separator-p">OR</p>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*                <div className="row">*/}
            {/*                    {children}*/}
            {/*                </div>*/}


            {/*            </div>*/}
            {/*            <div className="col-md-6 col-lg-8">*/}
            {/*                <div className="bgImage-100 ">*/}

            {/*                    <div className="row images">*/}
            {/*                        <div className="col-3" style={{*/}
            {/*                            backgroundImage: `url(${toAbsoluteUrl('/media/images/home/anime.png')})`,*/}
            {/*                            backgroundSize: "contain",*/}
            {/*                        }}>*/}
            {/*                        </div>*/}
            {/*                        <div className="col-6" style={{*/}
            {/*                            backgroundImage: `url(${toAbsoluteUrl('/media/images/home/hero_dark_2.png')})`,*/}
            {/*                            backgroundSize: "contain",*/}
            {/*                        }}>*/}
            {/*                        </div>*/}
            {/*                        <div className="col-3" style={{*/}
            {/*                            backgroundImage: `url(${toAbsoluteUrl('/media/images/home/hero_dark_1.png')})`,*/}
            {/*                            backgroundSize: "contain",*/}
            {/*                        }}>*/}
            {/*                        </div>*/}
            {/*                    </div>*/}


            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}

            {/*    <p>*/}
            {/*        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cum deserunt, hic natus officia*/}
            {/*        repellat sed tempora? Magni mollitia perspiciatis sunt voluptate? At error exercitationem repellat,*/}
            {/*        soluta ullam veniam vero?*/}
            {/*        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cum deserunt, hic natus officia*/}
            {/*        repellat sed tempora? Magni mollitia perspiciatis sunt voluptate? At error exercitationem repellat,*/}
            {/*        soluta ullam veniam vero?*/}
            {/*        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cum deserunt, hic natus officia*/}
            {/*        repellat sed tempora? Magni mollitia perspiciatis sunt voluptate? At error exercitationem repellat,*/}
            {/*        soluta ullam veniam vero?*/}
            {/*        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cum deserunt, hic natus officia*/}
            {/*        repellat sed tempora? Magni mollitia perspiciatis sunt voluptate? At error exercitationem repellat,*/}
            {/*        soluta ullam veniam vero?*/}
            {/*        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cum deserunt, hic natus officia*/}
            {/*        repellat sed tempora? Magni mollitia perspiciatis sunt voluptate? At error exercitationem repellat,*/}
            {/*        soluta ullam veniam vero?*/}
            {/*        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto cum deserunt, hic natus officia*/}
            {/*        repellat sed tempora? Magni mollitia perspiciatis sunt voluptate? At error exercitationem repellat,*/}
            {/*        soluta ullam veniam vero?*/}
            {/*    </p>*/}
            {/*</div>*/}
        </>

    )
}

export {Container}