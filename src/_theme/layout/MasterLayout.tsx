import React, {FC} from 'react'
import {ChildrenProps} from "../../config-global";
import {PageDataProvider} from "./core";
import {AsideDefault} from './components/aside/AsideDefault'


const MasterLayout: FC<ChildrenProps> = ({children}) => {

    return (
        <PageDataProvider>
            <div className='d-flex flex-row flex-column-fluid'>
                <AsideDefault/>
                <div className='wrapper d-flex flex-column flex-row-fluid' id='kt_wrapper'>
                    <div id='kt_content' className='content d-flex flex-column flex-column-fluid'>
                        {children}
                    </div>
                </div>
            </div>

        </PageDataProvider>
    )
}

export {MasterLayout}
