import React from "react";
import Header from "../../Header";
import {PATH_AUTH} from "../../routing/paths";
import {Link} from "react-router-dom";

const images = {
    image1: "https://app.leonardo.ai/img/login-hero-images/Celestial.webp",
    image2: "https://app.leonardo.ai/img/login-hero-images/FemaleAdventurer5.webp"
}

export default function Before() {

    return (
        <>
            <div className="container-fluid p-0 position-relative">
                <div className="row _header d-flex justify-content-end align-items-center position-absolute">
                    <div className="col-2 text-white">Login</div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <div className="_pt-60 _pl-14">
                                <h1 className="h1-home">Unleash your <span
                                    className="h1-700 rad-color-2">Creativity</span> with the power of <span
                                    className="h1-700 rad-color-1">Leonardo Ai </span>
                                </h1>
                                <h2 className={"brxe-ukrozz"}>Create production-quality visual assets for
                                    your projects with unprecedented quality, speed, and style-consistency.</h2>
                                <div className="row">
                                    <div className="col-6">
                                        <Link to={PATH_AUTH.login}
                                              className="form-submit text-white"
                                        >Create account</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 backgroundImage"
                             style={{
                                 backgroundImage: `url("${images.image1}")`
                             }}
                        >col-6
                        </div>
                    </div>

                </div>
            </div>
            {/*<Header />*/}
        </>
    )
}