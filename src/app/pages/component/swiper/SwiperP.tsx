import React, {useEffect, useState, FC, Dispatch, SetStateAction, useMemo, useCallback} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import {toAbsoluteUrl} from "../../../../_theme/helpers";
import {SwiperImages, SwiperTitles} from "./component";


const SwiperP: FC = () => {
    const titles = ['Title 1', 'Title 2'];

    const [indexImg, setIndexImg] = useState<number>(0)

    const memoizedSetIndexImg = useCallback(
        (newIndex: number | ((prevIndex: number) => number)) => {
            if (typeof newIndex === 'function') {
                setIndexImg((prevIndex) => newIndex(prevIndex));
            } else {
                setIndexImg(newIndex);
            }
        },
        []
    );

    const memoizedSwiperTitles = useMemo(
        () => <SwiperTitles titles={titles} setIndexImg={memoizedSetIndexImg} />,
        [titles, memoizedSetIndexImg]
    );


    return (
        <>

            {/*<SwiperTitles titles={titles} setIndexImg={setIndexImg} />*/}

            {memoizedSwiperTitles}

            <SwiperImages indexImg={indexImg} />
            {/*<div className="swiper-titles">*/}
            {/*    <Swiper*/}
            {/*        // onMouseMove={handleMouseMove}*/}
            {/*        // pagination={{*/}
            {/*        //     clickable: false,*/}
            {/*        // }}*/}
            {/*        // modules={[Pagination]}*/}
            {/*        slidesPerView={3}*/}
            {/*        centeredSlides={true}*/}
            {/*        spaceBetween={1}*/}
            {/*        onSlideChange={(e: any) => {*/}
            {/*            setIndexImg(e.realIndex)*/}
            {/*        }}*/}
            {/*        onProgress={(e: any) => {*/}
            {/*            console.log(e)*/}
            {/*        }}*/}
            {/*    >*/}
            {/*        {titles.map((title, index) => (*/}
            {/*            <SwiperSlide key={index}>*/}
            {/*                <span className="gradient-color-full title">{title}</span>*/}
            {/*            </SwiperSlide>*/}
            {/*        ))}*/}
            {/*    </Swiper>*/}
            {/*</div>*/}

            {/*<div className="swiper-imgs">*/}
            {/*    <div className="swiper-img">*/}
            {/*        <img src={toAbsoluteUrl(`media/images/home/landing/swiper-${indexImg}.png`)} alt=""/>*/}

            {/*    </div>*/}
            {/*</div>*/}

        </>
    );
};

export { SwiperP };






