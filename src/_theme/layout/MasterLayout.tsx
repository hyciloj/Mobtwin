import React, {FC} from 'react'
import {ChildrenProps} from "../../config-global";
import {PageDataProvider} from "./core";
import {AsideDefault} from './components/aside/AsideDefault'
import {HeaderWrapper} from "./components/header/HeaderWrapper";


const MasterLayout: FC<ChildrenProps> = ({children}) => {

    return (
        <PageDataProvider>

            <div className='page d-flex flex-row flex-column-fluid'>
                <AsideDefault />
                <div className='wrapper d-flex flex-column flex-row-fluid position-relative' id='kt_wrapper'>
                    <HeaderWrapper />

                    <div id='kt_content' className='content d-flex flex-column flex-column-fluid'>
                        {/*<div className='post d-flex flex-column-fluid' id='kt_post'>*/}
                            {children}
                        {/*</div>*/}
                    </div>

                </div>
            </div>

            {/*<div className='d-flex flex-row flex-column-fluid'>*/}
            {/*    <AsideDefault/>*/}
            {/*    <div className='wrapper d-flex flex-column flex-row-fluid' id='kt_wrapper'>*/}

            {/*        <HeaderWrapper />*/}


            {/*        <div className='container-fluid wrapper d-flex flex-column flex-row-fluid' id='kt_wrapper'>*/}
            {/*            <div id='kt_content' className='content d-flex flex-column flex-column-fluid'>*/}
            {/*                {children}*/}
            {/*            </div>*/}
            {/*        </div>*/}

            {/*    </div>*/}


            {/*</div>*/}

        </PageDataProvider>
    )
}

export {MasterLayout}
