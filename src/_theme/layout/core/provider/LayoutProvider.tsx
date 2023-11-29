import React, {createContext, useContext, useState, useEffect, Dispatch, SetStateAction, ReactNode} from 'react'
import {ILayout} from "../LayoutModels";
import {LayoutSetup} from "../LayoutSetup";

export interface LayoutContextModel {
    layout: ILayout
    setLayout: Dispatch<SetStateAction<ILayout>>;
}

const LayoutContext = createContext<LayoutContextModel | undefined>(undefined);

interface LayoutProviderProps {
    children: ReactNode;
}
const LayoutProvider: React.FC<LayoutProviderProps> = ({children}) => {

    const [layout, setLayout] = useState<ILayout>(LayoutSetup.config);

    useEffect(() => {
        LayoutSetup.setConfig(layout);
        LayoutSetup.updatePartialConfig(layout)

    }, [layout]);

    return <LayoutContext.Provider value={{ layout, setLayout }}>
        {children}
    </LayoutContext.Provider>
}

export {LayoutContext, LayoutProvider}

// Create a custom hook to use the theme context
export const useLayout = () => {
    const context = useContext(LayoutContext);
    if (!context) {
        throw new Error('useLayout must be used within a LayoutProvider');
    }
    return context;
};





// import React, {createRef, FC, useContext, useEffect, useRef, useState} from "react";
// import {ChildrenProps} from "../../../../config-global";
// import {LayoutContextModel, LayoutContext} from "../context";
// import {LayoutSetup} from "../LayoutSetup";
// import {ILayout} from "../LayoutModels";
// import {motion} from "framer-motion";
//
// const LayoutProvider: FC<ChildrenProps> = ({children}) => {
//
//     const [config, setConfig] = useState(LayoutSetup.config)
//     const [classes, setClasses] = useState(LayoutSetup.classes)
//     const layoutRef = useRef<HTMLDivElement | null>(null)
//
//     const setLayout = (_themeConfig: Partial<ILayout>) => {
//
//         const bodyClasses = Array.from(document.body.classList)
//         bodyClasses.forEach((cl) => document.body.classList.remove(cl))
//         LayoutSetup.updatePartialConfig(_themeConfig)
//         setConfig(Object.assign({}, LayoutSetup.config))
//         setClasses(LayoutSetup.classes)
//     }
//
//     useEffect(() => {
//         document.body.classList.add(config.mode)
//     }, [])
//
//     const value: LayoutContextModel = {
//         config,
//         classes,
//         setLayout,
//         layoutRef: layoutRef
//     }
//
//     return <LayoutContext.Provider value={value}>
//         <motion.div ref={layoutRef}>
//             {children}
//         </motion.div>
//     </LayoutContext.Provider>
//
// }
//
// export {LayoutProvider}
//
// export function useLayout() {
//     return useContext(LayoutContext)
// }
