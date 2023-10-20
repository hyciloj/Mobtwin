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

// https://dribbble.com/shots/17143561-Sidebar-Navigation-Menu-Animation


const AsideDefault: FC = () => {

    const {config, classes} = useLayout()
    const {aside} = config

    const {layoutRef} = useLayout();
    const boxRef = useRef<HTMLDivElement | null>(null);
    const isClicked = useRef<boolean>(false);
    const constraintsRef = useRef(null);

    const coords = useRef<{ startX: number, startY: number, lastX: number, lastY: number, }>({
        startX: 0,
        startY: 0,
        lastX: 0,
        lastY: 0,
    })

    // useEffect(() => {
    //     if (!boxRef.current || !layoutRef.current) {
    //         return;
    //     }
    //
    //     const box = boxRef.current;
    //     const layout = layoutRef.current; // Define the layout element
    //
    //     const onMouseDown = (e: MouseEvent) => {
    //         isClicked.current = true;
    //         coords.current.startX = e.clientX
    //         coords.current.startY = e.clientY
    //     };
    //     const onMouseUp = (e: MouseEvent) => {
    //         isClicked.current = false;
    //         coords.current.lastX = box.offsetLeft
    //         coords.current.lastY = box.offsetTop
    //
    //         if (-box.offsetLeft > box.clientWidth / 2) {
    //             coords.current.lastX = 0
    //         }
    //     };
    //     const onMouseMove = (e: MouseEvent) => {
    //         if (!isClicked.current) return;
    //
    //         const nextX = e.clientX - coords.current.startX + coords.current.lastX
    //         const nextY = e.clientY - coords.current.startY + coords.current.lastY
    //
    //         box.style.left = `${nextX}px`;
    //         box.style.top = `${nextY}px`;
    //     };
    //
    //     box.addEventListener("mousedown", onMouseDown);
    //     box.addEventListener("mouseup", onMouseUp);
    //     layout.addEventListener("mousemove", onMouseMove);
    //     layout.addEventListener("mouseLeave", onMouseUp);
    //
    //     return () => {
    //         box.removeEventListener("mousedown", onMouseDown);
    //         box.removeEventListener("mouseup", onMouseUp);
    //         layout.removeEventListener("mousemove", onMouseMove);
    //         layout.removeEventListener("mouseLeave", onMouseUp);
    //     };

    // }, [layoutRef]); // Add layoutRef as a dependency


    const [boxWidth, setBoxWidth] = useState<number>(0)
    const [boxHeight, setBoxHeight] = useState<number>(0)
    const[scrollbarWidth, setScrollbarWidth] = useState<number>(0)

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const rightEdge = useTransform(x, (latest) => windowWidth - latest - 300);
    const bottomEdge = useTransform(y, (latest) => windowHeight - latest - 300);

    useEffect(() => {
        if (!boxRef.current) {
            return;
        }

        const box = boxRef.current;
        // const scrollbarWidth = (windowWidth - document.documentElement.clientWidth)

        // const newBoxWidth = box.clientWidth - scrollbarWidth + 50
        setBoxWidth(box.clientWidth + (windowWidth - document.documentElement.clientWidth) + 2)
        setBoxHeight(windowHeight - 75)
        setScrollbarWidth(windowWidth - document.documentElement.clientWidth)


    }, [])
    //
    // const _onMouseLeave: MouseEventHandler<HTMLDivElement> = (e) => {
    //
    //     if (!boxRef.current) return
    //     const box = boxRef.current;
    //
    //     let style = window.getComputedStyle(box);
    //     let matrix = new WebKitCSSMatrix(style.transform);
    //     let matrix_m41 = matrix.m41
    //
    //     if (matrix_m41 > 10) {
    //         console.log(matrix_m41)
    //         box.style.transform = `transform: translateX(${-matrix_m41}) translateY(61px) translateZ(0px);`
    //     }
    //     // }
    // }

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