import {KTSVG, toAbsoluteUrl} from "../../../helpers";
import {Link} from "react-router-dom";
import React, {useEffect, useRef, useState} from "react";
import {getLayout, ILayout, LayoutSetup, useLayout} from "../../core";
import {_UpdateConfig} from "../../../../app/functions/_UpdateConfig";

const AsideHeader = () => {
    const {layout, setLayout} = useLayout();
    const [classes, setClasses] = useState<ILayout>(getLayout());

    const {minimized} = layout.aside;

    // const updateData = (fieldsToUpdate: Partial<ILayout>) => {
    //     const updatedData = {...classes, ...fieldsToUpdate};
    //     setConfig(updatedData);
    //     LayoutSetup.setConfig(updatedData);
    // };
    return (
        <>


            {/* begin::Brand */}
            <div className="aside-header">

                <div className='aside-logo flex-column-auto' id='kt_aside_logo'>

                    <div className='d-flex justify-content-center align-items-center' onClick={() => {
                        _UpdateConfig({
                            config: {layout, setLayout},
                            fieldsToUpdate: {...layout, aside: {...layout.aside, minimized: false}}
                        })
                    }}>
                        <img alt='Logo'
                             className='_h-10 logo'
                             src={toAbsoluteUrl('/media/logos/favicon.png')}
                        />
                        <span className="text-h4 brand-name ms-1">Mobtwin</span>
                    </div>
                    <div
                        id='kt_aside_toggle'
                        className='aside-toggle'
                        data-kt-toggle={minimized}
                        data-kt-toggle-state='active'
                        data-kt-toggle-target='body'
                        data-kt-toggle-name='aside-minimize'
                        onClick={() => {
                            _UpdateConfig({
                                config: {layout, setLayout},
                                fieldsToUpdate: {...layout, aside: {...layout.aside, minimized: true}}
                            })
                        }}
                    >
                        <KTSVG path={'/media/icons/duotune/arrows/arr079.svg'} className=''/>
                    </div>
                </div>
            </div>
            {/* end::Brand */}

            {/*<div className="aside-header d-flex justify-content-between align-items-center"*/}
            {/*>*/}
            {/*    <div className="aside-logo flex-column-auto" id="kt_aside_logo">*/}
            {/*        <Link to='/dashboard'>*/}
            {/*            <img*/}
            {/*                alt='Logo'*/}
            {/*                className='_h-10 logo'*/}
            {/*                src={toAbsoluteUrl('/media/logos/favicon.png')}*/}
            {/*            />*/}
            {/*        </Link>*/}
            {/*        <div*/}
            {/*            id='kt_aside_toggle'*/}
            {/*            className='aside-toggle'*/}
            {/*            data-kt-toggle={minimized}*/}
            {/*            data-kt-toggle-state='active'*/}
            {/*            data-kt-toggle-target='body'*/}
            {/*            data-kt-toggle-name='aside-minimize'*/}
            {/*            onClick={() =>*/}
            {/*                updateData({*/}
            {/*                    aside: {*/}
            {/*                        ...config.aside,*/}
            {/*                        minimized: !minimized*/}
            {/*                    }*/}
            {/*                })*/}
            {/*            }*/}
            {/*        >*/}
            {/*            <KTSVG path={'/media/icons/duotune/arrows/arr026.svg'} className=''/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    )
}

export {AsideHeader}