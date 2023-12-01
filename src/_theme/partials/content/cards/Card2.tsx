import React from "react";
import {TickerX} from "../../../../app/pages/component/tickers";
import ImagesGallery from "../../../../app/pages/before/ImageGallery.json";
import {CardXs} from "./CardXs";
import {KTSVG} from "../../../helpers";

const object = {
    img: "https://cdn.leonardo.ai/users/fae37140-c0cc-49ba-a546-89d0e26a345f/generations/ec98b55b-224f-4910-8a75-ef1f9dd3e327/variations/alchemyrefiner_alchemymagic_1_ec98b55b-224f-4910-8a75-ef1f9dd3e327_0.jpg?w=512"

}
const Card2 = () => {

    //
    return (
        <div className='card'>
            <div className="card-wrapper"  style={{backgroundImage: `url(${object.img})`}}>
                <div className="card-body start">
                    <div className="card-title">image to image Generator</div>
                    <div className="card-subtitle">
                        Build on Existing Images
                    </div>
                    <button className="button button-sm my-2">try now</button>
                </div>
                <div className="absolute-end">
                    <CardXs />
                    <KTSVG path={'/media/icons/duotune/arrows/arr080.svg'} className='svg-between mx-2'/>
                    <CardXs />
                </div>
            </div>
        </div>
    )
}

export {Card2}
