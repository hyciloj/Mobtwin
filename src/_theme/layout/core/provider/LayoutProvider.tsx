import React, {createRef, FC, useContext, useEffect, useRef, useState} from "react";
import {ChildrenProps} from "../../../../config-global";
import {LayoutContextModel, LayoutContext} from "../context";
import {LayoutSetup} from "../LayoutSetup";
import {ILayout} from "../LayoutModels";
import {motion} from "framer-motion";

const LayoutProvider: FC<ChildrenProps> = ({children}) => {

    const [config, setConfig] = useState(LayoutSetup.config)
    const [classes, setClasses] = useState(LayoutSetup.classes)
    const layoutRef = useRef<HTMLDivElement | null>(null)

    const setLayout = (_themeConfig: Partial<ILayout>) => {

        const bodyClasses = Array.from(document.body.classList)
        bodyClasses.forEach((cl) => document.body.classList.remove(cl))
        LayoutSetup.updatePartialConfig(_themeConfig)
        setConfig(Object.assign({}, LayoutSetup.config))
        setClasses(LayoutSetup.classes)
    }

    useEffect(() => {
        document.body.classList.add(config.mode)
    }, [])

    const value: LayoutContextModel = {
        config,
        classes,
        setLayout,
        layoutRef: layoutRef
    }

    return <LayoutContext.Provider value={value}>
        <motion.div ref={layoutRef}>
            {children}
        </motion.div>
    </LayoutContext.Provider>

}

export {LayoutProvider}

export function useLayout() {
    return useContext(LayoutContext)
}
