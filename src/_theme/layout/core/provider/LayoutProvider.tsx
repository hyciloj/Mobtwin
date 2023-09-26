import React, {FC, useContext, useEffect, useState} from "react";
import {ChildrenProps} from "../../../../config-global";
import {LayoutContextModel, LayoutContext} from "../context";
import {LayoutSetup} from "../LayoutSetup";
import {ILayout} from "../LayoutModels";

const LayoutProvider: FC<ChildrenProps> = ({children}) => {

    const [config, setConfig] = useState(LayoutSetup.config)
    const setLayout = (_themeConfig: Partial<ILayout>) => {
        setConfig(Object.assign({}, LayoutSetup.config))
    }
    useEffect(() => {
        document.body.classList.add(config.mode)
    }, [])

    const value: LayoutContextModel = {
        config,
        setLayout,
    }

    return <LayoutContext.Provider value={value}>{children}</LayoutContext.Provider>

}

export {LayoutProvider}

export function useLayout() {
    return useContext(LayoutContext)
}
