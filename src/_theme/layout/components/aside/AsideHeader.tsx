import {KTSVG, toAbsoluteUrl} from "../../../helpers";
import {Link} from "react-router-dom";
import React, {useEffect, useRef, useState} from "react";
import {getLayout, ILayout, LayoutSetup, useLayout} from "../../core";

const AsideHeader = () => {
    const [config, setConfig] = useState<ILayout>(getLayout());
    const [classes, setClasses] = useState<ILayout>(getLayout());

    const {minimizedY} = config.aside;

    const updateData = (fieldsToUpdate: Partial<ILayout>) => {
        const updatedData = {...classes, ...fieldsToUpdate};
        setConfig(updatedData);
        LayoutSetup.setConfig(updatedData);
    };

    return (
        <>
            <div className="aside-header d-flex justify-content-between align-items-center"
            >

                <div className="aside-logo flex-column-auto" id="kt_aside_logo">
                    <Link to='/dashboard'>
                        <img
                            alt='Logo'
                            className='_h-10 logo'
                            src={toAbsoluteUrl('/media/logos/favicon.png')}
                        />
                    </Link>
                </div>

                <div
                    id='kt_aside_toggle'
                    className='aside-toggle'
                    data-kt-toggle-y='true'
                    data-kt-toggle-y-state='active'
                    data-kt-toggle-y-target='body'
                    data-kt-toggle-y-name='aside-minimize'
                    onClick={() =>
                        updateData({
                            aside: {
                                ...config.aside,
                                minimizedY: !minimizedY
                            }
                        })
                    }
                >
                    <KTSVG path={'/media/icons/duotune/arrows/arr027.svg'} className=''/>
                </div>

            </div>
        </>
    )
}

export {AsideHeader}