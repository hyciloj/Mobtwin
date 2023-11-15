import React, {FC} from "react";
import {toAbsoluteUrl} from "../../../../../_theme/helpers";

type SwiperImagesProps = {
    indexImg: number
}

const SwiperImages: FC<SwiperImagesProps> = ({ indexImg }) => (
    <div className="swiper-imgs">
        <div className="swiper-img">
            <img src={toAbsoluteUrl(`media/images/screens/${indexImg}.png`)} alt="" />
        </div>
    </div>
);

export {SwiperImages}
