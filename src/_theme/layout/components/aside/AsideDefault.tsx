import React, {FC, useEffect, useRef, useState} from "react";
import {clsx} from "clsx";
import {AsideMenu} from "./AsideMenu";
import {useLayout, usePageData} from "../../core/provider";
import {AsideHeader} from "./AsideHeader";
import {useHover} from "../../../../app/hooks";


// https://dribbble.com/shots/17143561-Sidebar-Navigation-Menu-Animation


const AsideDefault: FC = () => {

    const {layout, setLayout} = useLayout();
    const {aside} = layout
    const ref = useRef<HTMLDivElement | null>(null);
    const [hovered, setHovered] = useState<boolean>(false)

    // useHover(ref, setHovered)

    return (
        <>
            {/*<motion.div drag*/}
            {/*            dragConstraints={{left: 0, right: windowWidth - boxWidth, top: 0, bottom: boxHeight}}*/}
            {/*            id='kt_aside'*/}
            {/*            className={clsx('aside', classes.aside.join(' '))}*/}
            {/*            data-kt-aside='true'*/}
            {/*            data-kt-aside-name='aside'*/}
            {/*            data-kt-aside-activate='{default: true, lg: false}'*/}
            {/*            data-kt-aside-overlay='true'*/}
            {/*            data-kt-aside-direction='start'*/}
            {/*            data-kt-aside-toggle='#kt_aside_mobile_toggle'*/}
            {/*            ref={boxRef}*/}
            {/*>*/}

            <div id='kt_aside'
                 className={`aside`}
                 data-kt-aside='true'
                 data-kt-aside-name='aside'
                 data-kt-aside-activate='{default: true, lg: false}'
                 data-kt-aside-overlay='true'
                 data-kt-aside-direction='start'
                 data-kt-aside-toggle='#kt_aside_mobile_toggle'
                 ref={ref}
            >

                {/*header::start*/}
                <AsideHeader/>
                {/*header::end*/}

                {/*menu::start*/}
                <div className="aside-menu flex-column-fluid hover-scroll-overlay-y">
                    <AsideMenu />
                </div>
                {/*menu::end*/}

                {/*footer::start*/}
                <div className="aside-footer">

                </div>
                {/*footer::end*/}
            </div>
        </>
    )
}

export {AsideDefault}