import React, {ReactNode} from 'react'
import clsx from 'clsx'
import {useLocation} from 'react-router'
import {checkIsActive, KTSVG} from '../../../helpers'
import {useLayout} from '../../core'

type Props = {
    children: ReactNode
    to: string
    title: string
    icon?: string
    fontIcon?: string
    hasBullet?: boolean
    show: boolean
    onClick: () => void
}

const AsideMenuItemWithSub: React.FC<Props> = ({
                                                   children,
                                                   to,
                                                   title,
                                                   icon,
                                                   fontIcon,
                                                   hasBullet,
                                                   show,
                                                   onClick,
                                               }) => {
    const {pathname} = useLocation()
    const isActive = checkIsActive(pathname, to)
    const {config} = useLayout()
    const {aside} = config

    return (
        <div className={clsx('menu-item', {'show': show}, 'menu-accordions')} onClick={onClick}>
            <span className='menu-link'>
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
                {/*{fontIcon && aside.menuIcon === 'font' && <i className={clsx('bi fs-3', fontIcon)}></i>}*/}
                <span className='menu-title'>{title}</span>
                <span className='menu-arrow'/>
            </span>
            <div className={clsx('menu-sub menu-sub-accordions', {'menu-active-bg': isActive})}>
                {children}
            </div>
        </div>
    )
}

export {AsideMenuItemWithSub}
