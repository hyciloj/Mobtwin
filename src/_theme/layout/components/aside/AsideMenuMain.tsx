import React, {FC} from "react";
import {Link} from "react-router-dom";
import {clsx} from "clsx";
import {KTSVG} from "../../../helpers";
import {AsideMenuItem} from "./AsideMenuItem";

const AsideMenuMain: FC = () => {

    return (
        <>
            <AsideMenuItem
                to='/dashboard'
                icon='/media/icons/duotune/art/art002.svg'
                title="Home"
                fontIcon='bi-app-indicator'
            />

            {/*<div className="menu-item">*/}
            {/*    <Link className={clsx('menu-link without-sub', {active: true})} to={"/"}>*/}
            {/*                    <span className='menu-icon'>*/}
            {/*                        <KTSVG path={'/media/icons/duotune/art/art002.svg'} className='svg-icon-2'/>*/}
            {/*                    </span>*/}
            {/*        <span className='menu-title'>Tableau de Bord</span>*/}
            {/*    </Link>*/}
            {/*</div>*/}
            {/*<div className="menu-item">*/}
            {/*    <Link className={clsx('menu-link without-sub', {active: false})} to={"/"}>*/}
            {/*                    <span className='menu-icon'>*/}
            {/*                        <KTSVG path={'/media/icons/duotune/art/art002.svg'} className='svg-icon-2'/>*/}
            {/*                    </span>*/}
            {/*        <span className='menu-title'>Layout</span>*/}
            {/*    </Link>*/}
            {/*</div>*/}

            {/*<div className='menu-item'>*/}
            {/*    <div className='menu-content _pt-8 _pb-2'>*/}
            {/*        <span className='menu-section text-muted text-uppercase fs-8 ls-1'>Crafted</span>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    )
}

export {AsideMenuMain}
