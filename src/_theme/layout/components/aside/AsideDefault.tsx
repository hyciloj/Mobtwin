import React, {FC} from "react";
import {ChildrenProps} from "../../../../config-global";
import {Link} from "react-router-dom";
import {KTSVG, toAbsoluteUrl} from "../../../helpers";
import {clsx} from "clsx";
import {AsideMenu} from "./AsideMenu";
import {useLayout} from "../../core/provider";

// https://dribbble.com/shots/17143561-Sidebar-Navigation-Menu-Animation

const AsideDefault: FC = () => {

    const {config} = useLayout()

    return (
        <div className="aside">

            {/*header::start*/}
                <div className="aside-header">
                <div className="aside-options d-flex flex-row justify-content-start align-items-center">
                    <KTSVG path={'/media/icons/duotune/abstract/abs050.svg'} className='close'/>
                    <KTSVG path={'/media/icons/duotune/abstract/abs050.svg'} className=''/>
                    <KTSVG path={'/media/icons/duotune/abstract/abs050.svg'} className=''/>
                </div>
                <div className="aside-logo flex-column-auto" id="kt_aside_logo">
                    <Link to='/dashboard'>
                        <img
                            alt='Logo'
                            className='_h-8 logo'
                            src={toAbsoluteUrl('/media/logos/favicon.png')}
                        />
                    </Link>
                </div>
            </div>
            {/*header::end*/}

            {/*menu::start*/}
            <div className="aside-menu flex-column-fluid">
                <AsideMenu />
            </div>
            {/*menu::end*/}

            {/*footer::start*/}
            <div className="aside-footer">

            </div>
            {/*footer::end*/}
        </div>
    )
}

export {AsideDefault}