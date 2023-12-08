import React from "react";

const object = {
    img: "https://cdn.leonardo.ai/users/ad2bcb49-5d69-4ebb-a7c4-1bc5dac4cc31/generations/ba000dc7-e947-46b9-8d06-ad26b44b1108/variations/alchemyrefiner_alchemymagic_1_ba000dc7-e947-46b9-8d06-ad26b44b1108_0.jpg"

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
