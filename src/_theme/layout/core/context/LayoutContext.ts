import {createContext, createRef, RefObject} from 'react';
import {ILayout, ILayoutCSSClasses} from "../LayoutModels";
import {DefaultLayoutConfig} from "../DefaultLayoutConfig";
import {getEmptyCssClasses, LayoutSetup} from "../LayoutSetup";

const LayoutRef = createRef();

export interface LayoutContextModel {
    config: ILayout
    classes: ILayoutCSSClasses
    setLayout: (config: LayoutSetup) => void
    layoutRef: RefObject<any>; // Adjust the type as needed
}

export const LayoutContext = createContext<LayoutContextModel>({
    config: DefaultLayoutConfig,
    classes: getEmptyCssClasses(),
    setLayout: (config) => {},
    layoutRef: LayoutRef,
});