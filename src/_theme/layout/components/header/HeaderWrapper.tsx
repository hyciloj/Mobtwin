import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import {useLayout} from '../../core'
import {TopBar} from "./TopBar";
import {GroupButton, Search1} from "../../../../app/modules/components";

export function HeaderWrapper() {
    const {pathname} = useLocation()
    const {layout, setLayout} = useLayout();
    const {aside} = layout


    return (
        <div className="navbar-fixed-wrapper">
            <div className='container-fluid p-0'>
                <div className='d-flex align-items-stretch justify-content-between flex-lg-grow-1'>
                    <GroupButton />
                    <Search1 />
                    <div className=''>
                        <TopBar/>
                    </div>
                </div>
            </div>
        </div>
    )
}
