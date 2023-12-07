import React from 'react'
import {KTSVG, toAbsoluteUrl} from '../../../helpers'
import {Badge} from "../../../../app/modules";

type Props = {
    className: string
}

const TablesWidget1: React.FC = () => {
    return (
        <div className="card">
            {/* begin::Header */}
            <div className='card-header d-flex justify-content-center align-items-start'>
                <h3 className='card-title'>
                    <span className='fs-md'>Latest Products</span>
                </h3>
            </div>
            {/* end::Header */}
            {/* begin::Body */}
            <div className='card-body p-0'>
                <div className='table-responsive'>
                    {/* begin::Table */}
                    <table className='table align-middle '>
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
                        {
                            [1, 2, 3, 4, 5, 6, 122].map((item, index) => (
                                <tr key={index}>
                                    <td><span className="ordinal-number">{item}</span></td>
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
                                        <Badge color={"light-green"}
                                               size={"sm"}
                                               label={`+${item}`}
                                               icon={"/media/icons/duotune/arrows/arr067.svg"}
                                        />
                                        {/*<div className="badge badge">*/}
                                        {/*    <span className="badge-label"></span>*/}
                                        {/*    <KTSVG path=''*/}
                                        {/*           className='badge-icon'*/}
                                        {/*    />*/}
                                        {/*</div>*/}
                                    </td>
                                </tr>
                            ))
                        }
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
