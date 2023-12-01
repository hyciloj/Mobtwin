import React from "react";
import {TickerX} from "../../../../app/pages/component/tickers";
import ImagesGallery from "../../../../app/pages/before/ImageGallery.json";
import {CardXs} from "./CardXs";
import {KTSVG} from "../../../helpers";

const object = {
    img: "https://cdn.leonardo.ai/users/fae37140-c0cc-49ba-a546-89d0e26a345f/generations/ec98b55b-224f-4910-8a75-ef1f9dd3e327/variations/alchemyrefiner_alchemymagic_1_ec98b55b-224f-4910-8a75-ef1f9dd3e327_0.jpg?w=512"

}
const Card3 = () => {

    //
    return (
        <div className='card'>
            <div className="card-wrapper">

                <div className="card-body end">
                    <div className="card-tickers tickers">
                        <div className="">
                            <TickerX data={ImagesGallery.firstLine}
                                     duration={10}
                                     from={0}
                                     to={-10}
                            />
                            <TickerX data={ImagesGallery.secondLine}
                                     duration={35}
                                     from={0}
                                     to={10}
                            />
                            <TickerX data={ImagesGallery.firstLine}
                                     duration={25}
                                     from={0}
                                     to={-10}
                            />
                            <TickerX data={ImagesGallery.firstLine}
                                     duration={25}
                                     from={0}
                                     to={-10}
                            />
                        </div>
                    </div>
                    <div className="card-title">image to image Generator</div>
                    <div className="card-subtitle my-2">
                        Build on Existing Images
                    </div>
                    <button className="button button-sm my-2">try now</button>
                </div>
            </div>
        </div>
    )
}

export {Card3}
