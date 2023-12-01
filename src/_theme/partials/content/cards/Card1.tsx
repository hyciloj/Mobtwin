import React from "react";

const object = {
    img: "https://cdn.leonardo.ai/users/438aafb3-8f5d-498c-aea5-29d687fafd7e/generations/67d48622-2136-433b-b73c-4a383baee70e/PhotoReal_Capture_a_breathtaking_scene_of_a_dragon_soaring_in_2.jpg"

}
const Card1 = () => {

    //
    return (
        <div className='card'>
            <div className="card-wrapper"  style={{backgroundImage: `url(${object.img})`}}>
                <div className="card-body">
                    <div className="card-title">premium collection</div>
                    <div className="card-subtitle">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque laudantium sapiente tempore velit.
                    </div>
                </div>
                <div className="card-footer">
                    <div className="properties">
                        <img src="https://static.wikia.nocookie.net/angrybirds/images/c/c3/AB_Reloaded_App_Icon_Space_V1.png" alt=""/>
                        <div className="description">
                            <div className="title">title</div>
                            <div className="subtitle">lorem ipsum</div>
                        </div>
                    </div>

                    <a className="button" href={''}>Discover</a>
                </div>
            </div>
        </div>
    )
}

export {Card1}
