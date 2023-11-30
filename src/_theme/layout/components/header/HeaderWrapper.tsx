import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import {useLayout} from '../../core'
import {TopBar} from "./TopBar";
import {Search1, GroupButton} from "../../../../app/modules/components";

export function HeaderWrapper() {
    const {pathname} = useLocation()
    const {layout, setLayout} = useLayout();
    const {aside} = layout


    return (
        <div className="navbar-fixed-wrapper">
            <div className='container-fluid d-flex align-items-stretch justify-content-between'>
                <div className='d-flex align-items-stretch justify-content-between flex-lg-grow-1'>
                    <div className="d-flex align-items-stretch" id="kt_header_nav">
                        <GroupButton buttons={['free', 'upgrade']} />
                    </div>
                    <div className="d-flex align-items-stretch" id="kt_header_nav">
                        <Search1 />
                    </div>
                    <div className='d-flex align-items-stretch flex-shrink-0'>
                        <TopBar/>
                    </div>
                </div>
            </div>
        </div>
    )
}
