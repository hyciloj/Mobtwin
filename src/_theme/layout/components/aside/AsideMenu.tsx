import React, {FC, useEffect, useRef} from "react";
import {useLocation} from 'react-router'
import {clsx} from "clsx";
import {AsideMenuMain} from "./AsideMenuMain";
type Props = {
    asideMenuCSSClasses: string[]
}

const AsideMenu: FC = () => {

    const scrollRef = useRef<HTMLDivElement | null>(null)
    const {pathname} = useLocation()

    useEffect(() => {
    }, [pathname])

    return (
        <div
            id='kt_aside_menu_wrapper'
            ref={scrollRef}
            className=' my-3 my-lg-3'
            data-kt-scroll='true'
            data-kt-scroll-activate='{default: false, lg: true}'
            data-kt-scroll-height='auto'
            data-kt-scroll-dependencies='#kt_aside_logo, #kt_aside_footer'
            data-kt-scroll-wrappers='#kt_aside_menu'
            data-kt-scroll-offset='0'
        >
            <div
                id='#kt_aside_menu'
                data-kt-menu='true'
                className={clsx(
                    'menu menu-column menu-title-gray-800 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500',
                )}
            >
                <AsideMenuMain />
            </div>
        </div>
    )
}

export {AsideMenu}