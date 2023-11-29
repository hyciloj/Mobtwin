import React from 'react'
import {Link, useLocation} from 'react-router-dom'
import {useLayout} from '../../core'

export function HeaderWrapper() {
    const {pathname} = useLocation()
    const {layout, setLayout} = useLayout();
    const {aside} = layout


    return (
        <div className="navbar-fixed-wrapper">
            <div className="d-flex align-items-stretch justify-content-between">
                {/* begin::Wrapper */}
                <div className='d-flex align-items-stretch justify-content-between flex-lg-grow-1'>
                    <div className='d-flex align-items-stretch flex-shrink-0'>
                        <p className={""}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias amet at debitis eius eligendi eum fugit illo illum laboriosam necessitatibus odit placeat, quae quas quasi recusandae sapiente tempore veritatis.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
