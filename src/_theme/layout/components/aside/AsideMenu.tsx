import React, {FC, useEffect, useRef} from "react";
import {useLocation} from 'react-router'
import {Link} from "react-router-dom";
import {clsx} from "clsx";
import {KTSVG} from "../../../helpers";
import {AsideMenuMain} from "./AsideMenuMain";
// import {
//     DrawerComponent,
//     MenuComponent,
//     ScrollComponent,
//     ToggleComponent,
// } from '../../../assets/ts/components'
type Props = {
    asideMenuCSSClasses: string[]
}

const AsideMenu: FC<Props> = ({asideMenuCSSClasses}) => {

    const scrollRef = useRef<HTMLDivElement | null>(null)
    const {pathname} = useLocation()

    useEffect(() => {
        setTimeout(() => {
        }, 50)
    }, [pathname])

    return (
        <div
            id='kt_aside_menu_wrapper'
            ref={scrollRef}
            className='hover-scroll-overlay-y my-5 my-lg-5'
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
                    asideMenuCSSClasses.join(' ')
                )}
            >
                <AsideMenuMain />
            </div>
        </div>
    )
}

export {AsideMenu}