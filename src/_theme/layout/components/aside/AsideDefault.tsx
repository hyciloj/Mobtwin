import React, {FC, MouseEventHandler, useEffect, useRef, useState} from "react";
import {ChildrenProps} from "../../../../config-global";
import {Link} from "react-router-dom";
import {KTSVG, toAbsoluteUrl} from "../../../helpers";
import {clsx} from "clsx";
import {AsideMenu} from "./AsideMenu";
import {useLayout} from "../../core/provider";
import {AsideHeader} from "./AsideHeader";
import {ILayout, LayoutSetup} from "../../core";
import {motion, useMotionValue, useTransform} from 'framer-motion';
import {string} from "yup";

// https://dribbble.com/shots/17143561-Sidebar-Navigation-Menu-Animation


const AsideDefault: FC = () => {

    const {config, classes} = useLayout()
    const {aside} = config

    const boxRef = useRef<HTMLDivElement | null>(null);

    const [boxWidth, setBoxWidth] = useState<number>(0)
    const [boxHeight, setBoxHeight] = useState<number>(0)
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    useEffect(() => {
        if (!boxRef.current) {
            return;
        }

        const box = boxRef.current;
        setBoxWidth(box.clientWidth + (windowWidth - document.documentElement.clientWidth) + 2)
        setBoxHeight(windowHeight - 75)


    }, [])


    return (
        <>
            <motion.div drag
                        dragConstraints={{left: 0, right: windowWidth - boxWidth, top: 0, bottom: boxHeight}}
                        id='kt_aside'
                        className={clsx('aside', classes.aside.join(' '))}
                        data-kt-aside='true'
                        data-kt-aside-name='aside'
                        data-kt-aside-activate='{default: true, lg: false}'
                        data-kt-aside-overlay='true'
                        data-kt-aside-direction='start'
                        data-kt-aside-toggle='#kt_aside_mobile_toggle'
                        ref={boxRef}
            >

                {/*header::start*/}
                <AsideHeader/>
                {/*header::end*/}

                {/*menu::start*/}
                <div className="aside-menu flex-column-fluid">
                    <AsideMenu asideMenuCSSClasses={classes.asideMenu}/>
                </div>
                {/*menu::end*/}

                {/*footer::start*/}
                <div className="aside-footer">

                </div>
                {/*footer::end*/}
            </motion.div>
        </>
    )
}

export {AsideDefault}