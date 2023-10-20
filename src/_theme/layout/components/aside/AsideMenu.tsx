import React, {FC, useEffect, useRef} from "react";
import {useLocation} from 'react-router'
import {Link} from "react-router-dom";
import {clsx} from "clsx";
import {KTSVG} from "../../../helpers";
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
            // MenuComponent.reinitialization()
        }, 50)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname])

    /*



    &[data-kt-aside-minimize-y="on"] {
      transition: height 0.3s ease;
      max-height: get($aside-config, minimized-height);;

      #kt_aside_toggle svg {
        transform: rotate(180deg);
      }

      .aside-menu, .aside-footer {
        display: none;
      }
    }

    * */
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
                <div className="menu-item">
                    <Link className={clsx('menu-link without-sub', {active: true})} to={"/"}>
                                <span className='menu-icon'>
                                    <KTSVG path={'/media/icons/duotune/art/art002.svg'} className='svg-icon-2'/>
                                </span>
                        <span className='menu-title'>Tableau de Bord</span>
                    </Link>
                </div>
                <div className="menu-item">
                    <Link className={clsx('menu-link without-sub', {active: false})} to={"/"}>
                                <span className='menu-icon'>
                                    <KTSVG path={'/media/icons/duotune/art/art002.svg'} className='svg-icon-2'/>
                                </span>
                        <span className='menu-title'>Layout</span>
                    </Link>
                </div>

                <div className='menu-item'>
                    <div className='menu-content _pt-8 _pb-2'>
                        <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Crafted</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export {AsideMenu}