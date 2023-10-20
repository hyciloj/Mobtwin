import React, {FC} from 'react'
import {ChildrenProps} from "../../config-global";
import {PageDataProvider} from "./core";
import {AsideDefault} from './components/aside/AsideDefault'


const MasterLayout: FC<ChildrenProps> = ({children}) => {

    return (
        <PageDataProvider>
            <AsideDefault />
            {children}
        </PageDataProvider>
    )
}

export {MasterLayout}
