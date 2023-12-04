/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'

type Props = {
    className: string
}

const TablesWidget1: React.FC = () => {
    return (
        <div className="card">
            {/* begin::Header */}
            <div className='card-header'>
                <h3 className='card-title align-items-start flex-column'>
                    <span className='card-label fw-bolder fs-3 mb-1'>Latest Products</span>
                    <span className='text-muted mt-1 fw-bold fs-7'>More than 400 new products</span>
                </h3>
            </div>
            {/* end::Header */}
            {/* begin::Body */}
            <div className='card-body'>
                <div className='table-responsive'>
                    {/* begin::Table */}
                    <table className='table table-row-dashed table-row-gray-200 align-middle gs-0 gy-4'>
                        {/* begin::Table head */}
                        <thead>
                        <tr className='border-0'>
                            <th className='p-0 w-50px'/>
                            <th className='p-0 min-w-150px'/>
                            <th className='p-0 min-w-140px'/>
                            <th className='p-0 min-w-50px'/>
                        </tr>
                        </thead>
                        {/* end::Table head */}
                        {/* begin::Table body */}


                        <tbody>
                        <tr>
                            <td><span>1</span></td>
                            <td>
                                <div className='symbol symbol-45px me-2'>
                                    <span className='symbol-label'>
                                            <img src={toAbsoluteUrl('/media/svg/brand-logos/plurk.svg')}
                                                 className='h-50 align-self-center'
                                                 alt=''
                                            />
                                    </span>
                                </div>
                            </td>
                            <td>
                                <div className='text-dark fw-bolder fs-sm'>
                                    Brad Simmons
                                </div>
                                <span className='text-muted fw-bold fs-xs'>Movie Creator</span>
                            </td>
                            <td className='text-end'>
                                <div className="badge">
                                    hello
                                </div>
                            </td>
                        </tr>
                        </tbody>


                        {/* end::Table body */}
                    </table>
                </div>
                {/* end::Table */}
            </div>
        </div>
    )
}

export {TablesWidget1}
