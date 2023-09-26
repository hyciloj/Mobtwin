import React, {FC} from 'react'
import {ChildrenProps} from "../../config-global";
import {PageDataProvider} from "./core";
// import {PageDataProvider} from './core'


const MasterLayout: FC<ChildrenProps> = ({children}) => {


    return (
        <PageDataProvider>
            {children}
        </PageDataProvider>
    )
}

export {MasterLayout}
