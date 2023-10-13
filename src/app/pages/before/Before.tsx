import React from "react";
import Header from "../../Header";
import {PATH_AUTH} from "../../routing/paths";
import {Link} from "react-router-dom";
import {Notification} from "../../modules/components";
import {toAbsoluteUrl} from "../../../_theme/helpers";

const images = {
    image1: "https://app.leonardo.ai/img/login-hero-images/Celestial.webp",
    image2: "https://app.leonardo.ai/img/login-hero-images/FemaleAdventurer5.webp",
    image3: "https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/07/leosplash-1.png"
}

export default function Before() {

    return (
        <>
            <div className="container-fluid p-0 position-relative">
                <div className="row _header d-flex justify-content-end align-items-center">
                    <div className="col-1 offset-8 d-flex justify-content-center align-items-center">
                        <Link to={PATH_AUTH.login} className="main_button-xl">Login</Link>
                    </div>
                </div>

            </div>


            <main>
                <div className="container-fluid">
                    <div className="row position-relative">
                        <div className="col-6">
                            <div className="_pt-60 _pl-60 ">
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
                        <div className="col-6 bgImage-85 gl-absolute"
                             style={{
                                 backgroundImage: `url("${images.image3}")`
                             }}
                        />
                    </div>

                    <div className="row d-flex justify-content-around align-items-center _px-40  _py-32">
                        <div className="col-3">
                            <h3 id="brxe-ytffse" className="brxe-heading txt-center rad-color-full">Cultivate
                                Originality</h3>
                            <div id="brxe-ilptes" className="brxe-text-basic txt-center sp-txt">Your imagination, our
                                technology. Generate distinctive art with pre-trained AI models or train your own.
                            </div>
                        </div>
                        <div className="col-3">
                            <h3 id="brxe-ytffse" className="brxe-heading txt-center rad-color-full">Cultivate
                                Originality</h3>
                            <div id="brxe-ilptes" className="brxe-text-basic txt-center sp-txt">Your imagination, our
                                technology. Generate distinctive art with pre-trained AI models or train your own.
                            </div>
                        </div>
                        <div className="col-3">
                            <h3 id="brxe-ytffse" className="brxe-heading txt-center rad-color-full">Cultivate
                                Originality</h3>
                            <div id="brxe-ilptes" className="brxe-text-basic txt-center sp-txt">Your imagination, our
                                technology. Generate distinctive art with pre-trained AI models or train your own.
                            </div>
                        </div>
                    </div>
                </div>


                <Notification svg={'/media/svg/social-logos/dribbble.svg'}
                              title={"title"}
                              message={"message"}
                />

            </main>



            <footer></footer>

            {/*<Header/>*/}

        </>
    )
}