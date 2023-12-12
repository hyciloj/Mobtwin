import React, {FC} from 'react'
import {ChildrenProps} from "../../config-global";
import {PageDataProvider} from "./core";
import {AsideDefault} from './components/aside/AsideDefault'
import {HeaderWrapper} from "./components/header/HeaderWrapper";
import {Content} from "./components/Content";
import {Swiper, SwiperSlide} from 'swiper/react';
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";



const MasterLayout: FC<ChildrenProps> = ({children}) => {

    const number = 8133854254125102151351531;
    const digits = String(number)
        .split('')

    return (
        <PageDataProvider>

            <div className=''>
                <AsideDefault/>
                <div className='wrapper d-flex flex-column flex-row-fluid position-relative' id='kt_wrapper'>
                    <HeaderWrapper/>

                    <div id='kt_content' className='content d-flex flex-column flex-column-fluid'>

                        {/*<Toolbar />*/}

                        <div className="row">
                            {/*<Swiper   cssMode={true}*/}
                            {/*          pagination={true}*/}
                            {/*          mousewheel={true}*/}
                            {/*          keyboard={true}*/}
                            {/*          modules={[Navigation, Pagination, Mousewheel, Keyboard]}*/}
                            {/*         className="mySwiper"*/}
                            {/*>*/}
                            {/*    {digits.map((title, index) => (*/}
                            {/*        <SwiperSlide key={index}>*/}
                            {/*            <span className="button">Hello {index}</span>*/}
                            {/*        </SwiperSlide>*/}
                            {/*    ))}*/}
                            {/*</Swiper>*/}

                            {/*{*/}
                            {/*    digits.map((item, index) => (*/}
                            {/*        <div className="" key={index}>*/}
                            {/*            <button className="button">*/}
                            {/*                hello world!*/}
                            {/*            </button>*/}
                            {/*        </div>*/}
                            {/*    ))*/}
                            {/*}*/}

                        </div>
                        <div className='post d-flex flex-column-fluid' id='kt_post'>
                            <Content>{children}</Content>
                        </div>
                    </div>

                </div>
            </div>

            {/*<div className='d-flex flex-row flex-column-fluid'>*/}
            {/*    <AsideDefault/>*/}
            {/*    <div className='wrapper d-flex flex-column flex-row-fluid' id='kt_wrapper'>*/}

            {/*        <HeaderWrapper />*/}


            {/*        <div className='container-fluid wrapper d-flex flex-column flex-row-fluid' id='kt_wrapper'>*/}
            {/*            <div id='kt_content' className='content d-flex flex-column flex-column-fluid'>*/}
            {/*                {children}*/}
            {/*            </div>*/}
            {/*        </div>*/}

            {/*    </div>*/}


            {/*</div>*/}

        </PageDataProvider>
    )
}

export {MasterLayout}
