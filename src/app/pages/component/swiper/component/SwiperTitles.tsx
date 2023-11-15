import React, {Dispatch, FC, SetStateAction} from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
type SwiperTitlesProps = {
    titles: string[],
    setIndexImg: Dispatch<SetStateAction<number>>
}

const SwiperTitles: FC<SwiperTitlesProps> = ({ titles, setIndexImg }) => (
    <div className="swiper-titles">
        <Swiper
            slidesPerView={3}
            centeredSlides={true}
            spaceBetween={1}
            onSlideChange={(e: any) => {
                setIndexImg(e.realIndex)
            }}
            // onProgress={(e: any) => {
            //     console.log(e)
            // }}
        >
            {titles.map((title, index) => (
                <SwiperSlide key={index}>
                    <span className="gradient-color-full title">{title}</span>
                </SwiperSlide>
            ))}
        </Swiper>
    </div>
);

export {SwiperTitles}