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
        <div className="container-fluid p-0 backg.;/roundImage"
             style={{
                 backgroundImage: `url("${images.image1}")`,
                 backgroundSize: "cover"
             }}
        >
            <div className="_p-20 blur">
                <div className="row overflow-hidden" style={{borderRadius: 30}}>
                    <div className="col-md-6 col-lg-4 col-xl-3 d-flex flex-column _p-9 _bg-dark-gray-200">
                        <div className="d-flex flex-column align-items-center mb-3">

                            <img src={toAbsoluteUrl('/media/logos/favicon.png')}
                                 alt='mobtwin'
                                 className=''
                                 style={{width: 80, height: 80}}
                            />
                        </div>


                        <div className="d-flex flex-column align-items-center mb-2">
                            <p className="text-white">Sign up or Login with</p>
                        </div>

                        <div className="d-flex flex-column align-items-center mb-3">
                            <AuthButton title={'google'}
                                        url={'auth/google'}
                                        img={'/media/svg/brand-logos/google.svg'}
                                        width={20}
                                        height={20}
                                        alt={'google'}
                                        className={'_btn-auth-options'}
                            />
                        </div>

                        <div className="d-flex flex-column align-items-center mb-3">
                            <AuthButton title={'facebook'}
                                        url={'auth/google'}
                                        img={'/media/svg/brand-logos/facebook.svg'}
                                        width={20}
                                        height={20}
                                        alt={'facebook'}
                                        className={'_btn-auth-options'}
                            />
                        </div>

                        <div className="d-flex flex-column align-items-center">
                            <div className="_separator">
                                <hr aria-orientation="horizontal" className="_separator-hr"/>
                                <div className="_separator-div">
                                    <p className="_separator-p">OR</p>
                                </div>
                            </div>
                        </div>

                        {children}

                    </div>
                    <div className="col-md-6 col-lg-8 col-xl-9 backgroundImage"
                         style={{
                             backgroundImage: `url("${images.image1}")`
                         }}
                    >
                        Hello world col-9
                    </div>
                </div>
            </div>
        </div>
    )
}

export {Container}