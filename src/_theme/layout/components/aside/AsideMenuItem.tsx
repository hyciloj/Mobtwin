import React from 'react'
import clsx from 'clsx'
import {Link} from 'react-router-dom'
import {useLocation} from 'react-router'
import {checkIsActive, KTSVG} from '../../../helpers'
import {useLayout} from '../../core'
import {AsideMenuItemInterface} from "./types";

const AsideMenuItem: React.FC<AsideMenuItemInterface> = ({
                                            to,
                                            title,
                                            icon,
                                            fontIcon,
                                            hasBullet = false,
                                        }) => {
    const {pathname} = useLocation()
    const isActive = checkIsActive(pathname, to)
    const {layout} = useLayout()
    const {aside} = layout

    return (
        <div className='menu-item'>
            <Link className={clsx('menu-link without-sub', {active: isActive})} to={to}>
                {hasBullet && (
                    <span className='menu-bullet'>
                        <span className='bullet bullet-dot'/>
                    </span>
                )}
                {icon && aside.menuIcon === 'svg' && (
                    <span className='menu-icon'>
            <KTSVG path={icon} className='svg-icon-2'/>
            </span>
                )}
                {fontIcon && aside.menuIcon === 'font' && <i className={clsx('bi fs-3', fontIcon)}/>}
                <span className='menu-title'>{title}</span>
            </Link>
            {/*{children}*/}
        </div>
    )
}

export {AsideMenuItem}
