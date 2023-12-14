import React, {FC} from "react";
import {TickerX} from "../../../../app/pages/component/tickers";
import ImagesGallery from "../../../../app/pages/before/ImageGallery.json";
import {CardXs} from "./CardXs";
import {KTSVG} from "../../../helpers";
import {date} from "yup";

const object = {
    img: "https://cdn.leonardo.ai/users/fae37140-c0cc-49ba-a546-89d0e26a345f/generations/ec98b55b-224f-4910-8a75-ef1f9dd3e327/variations/alchemyrefiner_alchemymagic_1_ec98b55b-224f-4910-8a75-ef1f9dd3e327_0.jpg?w=512"

}

type image = {
    icon: string
}

interface Card3Interface {
    images: image[][]
}

const Card3: FC<Card3Interface> = ({images}) => {

    return (
        <div className='card'>
            <div className="card-wrapper">

                <div className="card-body end">
                    <div className="card-tickers tickers">
                        <div className="">

                            {
                                images.map((icon, index) => {

                                    return (
                                        <TickerX data={icon}
                                                 duration={10}
                                                 from={0}
                                                 to={-10}
                                                 key={index}
                                        />
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="card-title">image to image Generator</div>
                    <div className="card-subtitle my-2">
                        Build on Existing Images
                    </div>
                    <button className="button button-sm my-2 button-wild-orchid">
                        Start experience
                        <KTSVG path={"/media/icons/duotune/arrows/arr080.svg"} className={""}/>
                    </button>
                </div>
            </div>
        </div>
    )
}

export {Card3}
